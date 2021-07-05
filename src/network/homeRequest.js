import {request} from "@/network/request";

export function getMultiData(){
  return request({
    url:'/home/multidata'
  })
}

export function getTabControlData(type,page){
  return request({
    url:'/home/data',
    params:{
      type:type,
      page:page
    }
  })
}

export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
