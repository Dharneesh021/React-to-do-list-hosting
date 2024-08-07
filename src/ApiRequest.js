const ApiRequest = async(url='' , optionobj = null , errmsg = null) => {

  try{
    const response = await fetch(url , optionobj)
    if(!response.ok) throw Error ("Please reload the page")
  }
  catch(err){
    errmsg = err.msg
  }
  finally{
    return errmsg
  }
}

export default ApiRequest