import React,{useState} from 'react';
import {Alert,Image,Pressable,StyleSheet,Text,View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Ionicons} from '@expo/vector-icons';
import ScreenContainer from '../components/ScreenContainer';
import InfoCard from '../components/InfoCard';
import {colors} from '../theme/colors';
export default function AboutScreen(){
 const [cardUri,setCardUri]=useState<string|null>(null);
 const pickCard=async()=>{try{const r=await ImagePicker.launchImageLibraryAsync({mediaTypes:['images'],allowsEditing:false,quality:.8});if(r.canceled)return;if(r.assets[0]?.uri)setCardUri(r.assets[0].uri)}catch{Alert.alert('Image unavailable','Could not select the verification-card photo.')}};
 return <ScreenContainer>
 <Text style={styles.heading}>About NEPortfolio</Text>
 <InfoCard title="Student" description="NZAYISENGA Erneste"/>
 <InfoCard title="Registration number" description="25/27341"/>
 <InfoCard title="Verification code" description="MOB-A2-7341"/>
 <InfoCard title="Program" description="Final-Year Software Engineering at INES Ruhengeri"/>
 <InfoCard title="Version" description="1.0.0"/>
 <InfoCard title="Data use and offline access" description="Portfolio content works offline. Profile changes and selected image references are saved locally on this device. No passwords or account credentials are stored. External links need internet."/>
 <View style={styles.panel}><Text style={styles.label}>Handwritten verification card preview</Text><Text style={styles.help}>Write your full name, registration number, app name and MOB-A2-7341 on paper. Select its photo to preview during your demonstration.</Text>
 {cardUri?<Image source={{uri:cardUri}} resizeMode="contain" style={styles.cardImage} accessibilityLabel="Preview of handwritten verification card"/>:<Text style={styles.help}>No verification-card photo selected.</Text>}
 <Pressable onPress={pickCard} accessibilityRole="button" style={styles.button}><Ionicons name="image-outline" color={colors.background} size={18}/><Text style={styles.buttonText}>{cardUri?'Replace card photo':'Select card photo'}</Text></Pressable>
 {cardUri?<Pressable onPress={()=>setCardUri(null)} accessibilityRole="button" style={styles.remove}><Text style={styles.help}>Remove preview</Text></Pressable>:null}
 </View>
 </ScreenContainer>}
const styles=StyleSheet.create({heading:{color:colors.text,fontSize:25,fontWeight:'700',marginBottom:22},panel:{backgroundColor:colors.card,borderRadius:16,padding:16,marginBottom:18},label:{fontSize:17,fontWeight:'700',color:colors.accent,marginBottom:9},help:{fontSize:13,lineHeight:21,color:colors.text,marginBottom:10},cardImage:{width:'100%',height:180,marginVertical:10,backgroundColor:colors.background,borderRadius:8},button:{backgroundColor:colors.accent,borderRadius:10,padding:12,minHeight:46,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:9},buttonText:{fontSize:15,fontWeight:'700',color:colors.background},remove:{paddingTop:12,alignItems:'center'}});
