import request from '@/utils/request'


export function hisMultipleBackInfo(data) {
    return request({
      url: '/his/multipleBackInfo',
      method: 'post',
      data
    })
  }