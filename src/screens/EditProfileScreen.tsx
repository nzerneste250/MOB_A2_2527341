import React,{useEffect,useState} from 'react';
import {Alert,Image,Pressable,StyleSheet,Text,TextInput,View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system/legacy';
import ScreenContainer from '../components/ScreenContainer';
import {colors} from '../theme/colors';
import {useProfile} from '../context/ProfileContext';
import type {Profile} from '../storage/profileStorage';
type Key='headline'|'bio'|'primarySkill'|'availability';
export default function EditProfileScreen(){
 const {profile,update,reset}=useProfile();
 const [draft,setDraft]=useState<Profile>(profile);
 const [errors,setErrors]=useState<Partial<Record<Key,string>>>({});
 const [busy,setBusy]=useState(false);
 useEffect(()=>setDraft(profile),[profile]);
 const change=(key:Key,value:string)=>{setDraft(p=>({...p,[key]:value}));setErrors(e=>({...e,[key]:undefined}))};
 const validate=()=>{
  const e:Partial<Record<Key,string>>={};
  if(draft.headline.trim().length<5)e.headline='Headline must be at least 5 characters.';
  if(draft.bio.trim().length<30)e.bio='Biography must be at least 30 characters.';
  if(draft.primarySkill.trim().length<3)e.primarySkill='Primary skill must be at least 3 characters.';
  if(!draft.availability.trim())e.availability='Availability is required.';
  setErrors(e);return Object.keys(e).length===0;
 };
 const selectImage=async(camera:boolean)=>{
  try{
   const permission=camera?await ImagePicker.requestCameraPermissionsAsync():await ImagePicker.requestMediaLibraryPermissionsAsync();
   if(!permission.granted){Alert.alert('Permission denied','Image permission was not granted. You can try again.');return}
   const result=camera?await ImagePicker.launchCameraAsync({allowsEditing:true,aspect:[1,1],quality:.85}):await ImagePicker.launchImageLibraryAsync({allowsEditing:true,aspect:[1,1],quality:.85});
   if(result.canceled){Alert.alert('Cancelled','No photo was selected.');return}
   const uri=result.assets[0]?.uri;
   if(!uri)return;
   const folder=FileSystem.documentDirectory+'profile/';
   await FileSystem.makeDirectoryAsync(folder,{intermediates:true});
   const destination=folder+'selected-'+Date.now()+'.jpg';
   await FileSystem.copyAsync({from:uri,to:destination});
   setDraft(p=>({...p,imageUri:destination}));
  }catch{Alert.alert('Image error','Unable to use this image. Please try again.')}
 };
 const save=async()=>{if(!validate())return;setBusy(true);try{await update({...draft,headline:draft.headline.trim(),bio:draft.bio.trim(),primarySkill:draft.primarySkill.trim(),availability:draft.availability.trim()});Alert.alert('Saved','Your profile has been saved on this device.')}catch{Alert.alert('Save failed','Please try again.')}finally{setBusy(false)}};
 const field=(key:Key,label:string,multiline=false)=><View style={styles.field} key={key}><Text style={styles.label}>{label}</Text><TextInput style={[styles.input,multiline&&styles.multiline]} value={draft[key]} onChangeText={v=>change(key,v)} multiline={multiline} placeholderTextColor={colors.muted} accessibilityLabel={label}/>{errors[key]?<Text style={styles.error}>{errors[key]}</Text>:null}</View>;
 return <ScreenContainer>
  <Text style={styles.title}>Edit Profile</Text>
  <View style={styles.preview}>{draft.imageUri?<Image source={{uri:draft.imageUri}} style={styles.photo}/>:<Image source={require('../../assets/images/profile-avatar.png')} style={styles.photo}/>}</View>
  <Text style={styles.note}>Profile picture (preview)</Text>
  <View style={styles.actions}><Pressable style={styles.smallButton} onPress={()=>selectImage(true)}><Text style={styles.buttonText}>Camera</Text></Pressable><Pressable style={styles.smallButton} onPress={()=>selectImage(false)}><Text style={styles.buttonText}>Gallery</Text></Pressable><Pressable style={styles.smallButton} onPress={()=>setDraft(p=>({...p,imageUri:null}))}><Text style={styles.buttonText}>Remove</Text></Pressable></View>
  {field('headline','Professional headline')}
  {field('bio','Short biography',true)}
  {field('primarySkill','Primary skill')}
  {field('availability','Availability status')}
  <Pressable style={styles.save} disabled={busy} onPress={save}><Text style={styles.saveText}>{busy?'Saving...':'Save profile'}</Text></Pressable>
  <Pressable style={styles.reset} onPress={()=>Alert.alert('Reset profile','Restore the default profile?', [{text:'Cancel',style:'cancel'},{text:'Reset',style:'destructive',onPress:async()=>{try{await reset();Alert.alert('Reset','Default profile restored.')}catch{Alert.alert('Error','Reset failed.')}}}])}><Text style={styles.resetText}>Reset saved profile</Text></Pressable>
 </ScreenContainer>
}
const styles=StyleSheet.create({
 title:{color:colors.text,fontSize:25,fontWeight:'700',marginBottom:18},
 preview:{width:110,height:110,borderRadius:55,overflow:'hidden',alignSelf:'center',borderColor:colors.accent,borderWidth:2},
 photo:{width:'100%',height:'100%'},
 note:{color:colors.muted,textAlign:'center',marginTop:8,marginBottom:14},
 actions:{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:8,marginBottom:20},
 smallButton:{backgroundColor:colors.card,padding:11,borderRadius:10},
 buttonText:{color:colors.accent,fontWeight:'600'},
 field:{marginBottom:16},label:{color:colors.text,fontWeight:'600',marginBottom:8},
 input:{backgroundColor:colors.card,color:colors.text,borderColor:colors.border,borderWidth:1,borderRadius:12,padding:13,fontSize:16},
 multiline:{minHeight:112,textAlignVertical:'top'},
 error:{color:'#FFB5B5',marginTop:6,fontSize:13},
 save:{backgroundColor:colors.accent,padding:15,borderRadius:12,alignItems:'center'},
 saveText:{color:colors.background,fontWeight:'700',fontSize:16},
 reset:{alignItems:'center',padding:16},resetText:{color:colors.muted,textDecorationLine:'underline'}
});
