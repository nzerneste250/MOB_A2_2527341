import React from 'react';
import {Image,StyleSheet,Text,View,ActivityIndicator} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import InfoCard from '../components/InfoCard';
import {colors} from '../theme/colors';
import {useProfile} from '../context/ProfileContext';
export default function HomeScreen(){
 const {profile,loading}=useProfile();
 return <ScreenContainer>
  <Text style={styles.brand}>NEPortfolio</Text>
  <View style={styles.avatar}><Image source={profile.imageUri?{uri:profile.imageUri}:require('../../assets/images/profile-avatar.png')} style={styles.image} accessibilityLabel="Profile avatar"/></View>
  <Text style={styles.name}>My name is NZAYISENGA Erneste.</Text>
  {loading?<ActivityIndicator color={colors.accent}/>:<>
  <Text style={styles.headline}>{profile.headline}</Text>
  <InfoCard title="About Me" description={profile.bio}/>
  <InfoCard title="Primary skill" description={profile.primarySkill}/>
  <InfoCard title="Availability" description={profile.availability}/>
  </>}
  <Text style={styles.code}>MOB-A2-7341</Text>
 </ScreenContainer>
}
const styles=StyleSheet.create({
 brand:{color:colors.accent,fontSize:21,fontWeight:'700',marginBottom:25},
 avatar:{width:110,height:110,borderRadius:55,alignSelf:'center',overflow:'hidden',marginBottom:22,borderWidth:2,borderColor:colors.accent},
 image:{width:'100%',height:'100%'},
 name:{color:colors.text,fontSize:25,fontWeight:'700',textAlign:'center',lineHeight:34},
 headline:{color:colors.accent,textAlign:'center',fontSize:15,marginTop:14,marginBottom:24},
 code:{color:colors.muted,fontSize:13,textAlign:'center',marginTop:12}
});
