import React from 'react';
import {Linking,Pressable,StyleSheet,Text,View,Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../components/ScreenContainer';
import InfoCard from '../components/InfoCard';
import {projects} from '../data/portfolio';
import {colors} from '../theme/colors';
import type {RootStackParamList} from '../types';
type Props=NativeStackScreenProps<RootStackParamList,'ProjectDetails'>;
const icons:Record<string,keyof typeof Ionicons.glyphMap>={ikizame:'car-sport-outline','personal-portfolio':'globe-outline','crop-yield':'leaf-outline'};
export default function ProjectDetailsScreen({route}:Props){
 const p=projects.find(item=>item.id===route.params.projectId);
 if(!p)return <ScreenContainer><Text style={styles.title}>Project not found</Text><Text style={styles.info}>Please return to Projects.</Text></ScreenContainer>;
 const open=async()=>{if(!p.url)return;try{await Linking.openURL(p.url)}catch{Alert.alert('Cannot open link','An internet connection and compatible browser are required.')}};
 return <ScreenContainer>
 <View style={styles.icon}><Ionicons name={icons[p.id]||'code-slash-outline'} color={colors.accent} size={34}/></View>
 <Text style={styles.title}>{p.title}</Text>
 {p.status?<Text style={styles.status}>Status: {p.status}</Text>:null}
 <InfoCard title="Problem addressed" description={p.problem}/>
 <InfoCard title="My contribution" description={p.contribution}/>
 <InfoCard title="Technologies and techniques" description={p.technologies.join(' • ')}/>
 <InfoCard title="Project overview" description={p.description}/>
 {p.url?<View><Pressable style={styles.button} onPress={open} accessibilityRole="link" accessibilityLabel="Open ikizame website, internet required"><Text style={styles.buttonLabel}>Visit project website</Text><Ionicons name="open-outline" size={20} color={colors.background}/></Pressable><Text style={styles.info}>External link internet required. Details above work offline.</Text></View>:null}
 </ScreenContainer>}
const styles=StyleSheet.create({title:{color:colors.text,fontSize:24,fontWeight:'700',marginBottom:15},icon:{width:66,height:66,alignItems:'center',justifyContent:'center',borderRadius:17,backgroundColor:colors.card,marginBottom:14},status:{color:'#F8D68A',fontWeight:'700',marginBottom:14},button:{backgroundColor:colors.accent,padding:15,borderRadius:12,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10,minHeight:50},buttonLabel:{color:colors.background,fontWeight:'700',fontSize:16},info:{color:colors.muted,fontSize:13,lineHeight:20,marginBottom:18}});
