import React,{createContext,useContext,useEffect,useState} from 'react';
import {Profile,defaultProfile,loadProfile,saveProfile,clearProfile} from '../storage/profileStorage';
type ContextValue={profile:Profile;loading:boolean;update:(p:Profile)=>Promise<void>;reset:()=>Promise<void>};
const Context=createContext<ContextValue|undefined>(undefined);
export function ProfileProvider({children}:{children:React.ReactNode}){
 const [profile,setProfile]=useState<Profile>(defaultProfile);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;loadProfile().then(p=>{if(active)setProfile(p)}).catch(()=>{}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[]);
 const update=async(p:Profile)=>{await saveProfile(p);setProfile(p)};
 const reset=async()=>{await clearProfile();setProfile(defaultProfile)};
 return <Context.Provider value={{profile,loading,update,reset}}>{children}</Context.Provider>;
}
export function useProfile(){const ctx=useContext(Context);if(!ctx)throw new Error('ProfileProvider missing');return ctx}
