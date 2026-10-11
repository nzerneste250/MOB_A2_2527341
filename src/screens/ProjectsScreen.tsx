import React from 'react';
import {Pressable,StyleSheet,Text,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenContainer from '../components/ScreenContainer';
import {projects} from '../data/portfolio';
import {colors} from '../theme/colors';
import type {RootStackParamList} from '../types';
type Props={navigation:NativeStackScreenProps<RootStackParamList,'MainTabs'>['navigation']};
const icons:Record<string,keyof typeof Ionicons.glyphMap>={ikizame:'car-sport-outline','personal-portfolio':'globe-outline','crop-yield':'leaf-outline'};
export default function ProjectsScreen({navigation}:Props){return <ScreenContainer>
 <Text style={styles.heading}>My Projects</Text>
 <Text style={styles.caption}>Select a project to see the problem, my contribution, and technologies.</Text>
 {projects.map(p=><View key={p.id} style={styles.row}>
  <View style={styles.top}>
   <View style={styles.iconBox}><Ionicons name={icons[p.id]||'code-slash-outline'} size={25} color={colors.accent}/></View>
   <View style={styles.content}><Text style={styles.title}>{p.title}</Text>
   <Text style={styles.meta}>{p.status?'In Development':'Student project'}</Text></View>
  </View>
  <Text style={styles.summary} numberOfLines={2}>{p.problem}</Text>
  <Pressable accessibilityRole="button" accessibilityLabel={`View details for ${p.title}`} onPress={()=>navigation.navigate('ProjectDetails',{projectId:p.id})} style={({pressed})=>[styles.button,pressed&&{opacity:.8}]}>
   <Text style={styles.buttonLabel}>View details</Text><Ionicons name="arrow-forward" size={19} color={colors.background}/>
  </Pressable>
 </View>)}
 <Text style={styles.footnote}>Project information is available offline. Opening external websites requires internet.</Text>
 </ScreenContainer>}
const styles=StyleSheet.create({
 heading:{color:colors.text,fontSize:26,fontWeight:'700',marginBottom:8},
 caption:{color:colors.muted,fontSize:14,lineHeight:20,marginBottom:24},
 row:{backgroundColor:colors.card,borderRadius:15,padding:16,marginBottom:14},
 top:{flexDirection:'row',alignItems:'center',gap:12},
 iconBox:{width:48,height:48,borderRadius:13,backgroundColor:colors.background,alignItems:'center',justifyContent:'center'},
 content:{flex:1},title:{color:colors.text,fontSize:17,fontWeight:'700',lineHeight:23},
 meta:{color:colors.accent,fontSize:12,marginTop:4,fontWeight:'600'},
 summary:{color:colors.muted,lineHeight:21,marginTop:12,marginBottom:13,fontSize:14},
 button:{backgroundColor:colors.accent,minHeight:45,paddingHorizontal:17,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
 buttonLabel:{color:colors.background,fontWeight:'700',fontSize:15},footnote:{color:colors.muted,fontSize:12,lineHeight:19,marginTop:8}
});
