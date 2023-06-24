const apiReq=async(url='',optionObject=null,errmsg=null)=>{
try {
    const res=await fetch(url,optionObject)
    if(!res.ok){
        throw Error("Reload reload....");
    }
} catch (error) {
    err=error.message;

}finally{
    return err;
}
}
export default apiReq;