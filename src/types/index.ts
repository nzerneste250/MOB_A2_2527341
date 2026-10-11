export type Project={id:string;title:string;problem:string;contribution:string;technologies:string[];description:string;url?:string;image?:'ikizame'|'portfolio'|'crop';status?:'In Development'};
export type RootStackParamList={MainTabs:undefined;ProjectDetails:{projectId:string}};
export type MainTabParamList={Home:undefined;Skills:undefined;Projects:undefined;'Edit Profile':undefined;About:undefined};
