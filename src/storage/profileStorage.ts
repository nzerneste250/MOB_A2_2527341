import AsyncStorage from '@react-native-async-storage/async-storage';
export type Profile = {headline:string;bio:string;primarySkill:string;availability:string;imageUri:string|null};
export const defaultProfile:Profile={
 headline:'Web Developer | Graphic Designer',
 bio:'Final-year Software Engineering student at INES Ruhengeri with a background in Software Development and practical experience in website development, computer maintenance, digital design, photography, and video production.',
 primarySkill:'Website development',availability:'Available for opportunities',imageUri:null
};
const KEY='neportfolio_profile_v1';
export async function loadProfile():Promise<Profile>{
 const raw=await AsyncStorage.getItem(KEY);
 if(!raw)return defaultProfile;
 try { const saved=JSON.parse(raw);return {...defaultProfile,...saved}; } catch {return defaultProfile;}
}
export async function saveProfile(profile:Profile){await AsyncStorage.setItem(KEY,JSON.stringify(profile));}
export async function clearProfile(){await AsyncStorage.removeItem(KEY);}
