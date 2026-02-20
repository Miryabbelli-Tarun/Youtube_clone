export const API_KEY='AIzaSyDUpQU48L3pOcq0_ZHXi3-K5rFsLtxeOJw'


export const valueConverter=(views)=>{
    if(views>=1000000){
        return Math.floor(views/1000000)+'M'
    }
    else if(views>=1000){
        return Math.floor(views/1000)+'k'
    }
    else{
        return views
    }
}