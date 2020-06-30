import home from './images/home';
import my from './images/my'
import other from './images/other'
import register from './images/register'
import common from './images/common'
import goods from './images/goods'
import share from './images/share'

export default {
  home: appendHost(home),
  my: appendHost(my),
  other: appendHost(other),
  register: appendHost(register),
  common: appendHost(common),
  goods: appendHost(goods),
  share: appendHost(share),
}

function appendHost(srcs){
  const host = 'https://jxkcdn.jingxiaokang.com';
  Object.keys(srcs).forEach(k => {
    const src = srcs[k].replace(/(?:\?|\&)host=0/, '');
    if(src.indexOf('http')!==0){
      srcs[k]= srcs[k].indexOf('host=0')===-1 ? `${host}${src}` : src;
    }
  });
  return srcs;
}
