import React from 'react';
import {StyleSheet,Text} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import InfoCard from '../components/InfoCard';
import {skills,education} from '../data/portfolio';
import {colors} from '../theme/colors';
export default function SkillsScreen(){return <ScreenContainer><Text style={styles.heading}>Skills & Education</Text><Text style={styles.subheading}>Professional Skills</Text>
 {skills.map((s,i)=><InfoCard key={s} title={`${i+1}. ${s}`}/>)}
 <Text style={styles.subheading}>Education timeline</Text>
 {education.map(e=><InfoCard key={e.id} title={e.title} description={`${e.institution} • ${e.period}${e.detail?'\n'+e.detail:''}`}/>)}
 </ScreenContainer>}
const styles=StyleSheet.create({heading:{fontSize:25,fontWeight:'700',color:colors.text,marginBottom:22},subheading:{fontSize:18,fontWeight:'700',color:colors.accent,marginBottom:12,marginTop:8}})
