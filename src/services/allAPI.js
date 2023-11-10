
//upload videos

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const uploadAllVideos=async(reqBody)=>{
     return  await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all videos from json server

export const getALLVides = async()=>{
    return   await commonAPI('GET',`${serverURL}/videos`,'')
}

//api to delte a video
export const deletevideo = async(id)=>{
    return   await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//api to add date to watch history
export const addToHistory = async(videoDetails)=>{
    return   await commonAPI('POST',`${serverURL}/history`,videoDetails)
}


//api to get all history fom json server

export const getallHistory = async()=>{
    return   await commonAPI('GET',`${serverURL}/history`,"")
}

//api to add category

export const addToCategory = async(body)=>{
    return   await commonAPI('POST',`${serverURL}/category`,body)
}
//api to remove video history

export const deleteHistory = async(id)=>{
    return   await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


//api to get category
export const getAllCategories = async()=>{
    return   await commonAPI('GET',`${serverURL}/category`,'')

}

//api to delete category
export const deletecate = async(id)=>{
    return   await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get videos to vategory

export const addVideo = async(id)=>{
    return   await commonAPI('GET',`${serverURL}/videos/${id}`,'')
}

//api to update the vlaues

export const updateCate= async(id,body)=>{
     await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}