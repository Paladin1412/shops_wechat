import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtModal } from 'taro-ui';
import Model from '@/model';
import Assets from '@/components/assets';
import styles from './index.module.styl';

const noop = () => {}
function UpgradeTip({
  dialogGrade,
  id,
  visible = false,
  onCancel = noop
}){

  const onClose = () => {
    if(id){
      Model.common.upRead({
        id
      })
    }
    onCancel();
  }

  return (
    <View className={styles.upgrade_tip}>
      <AtModal
        isOpened={visible}
      >
        {dialogGrade == 1 &&<Image className={styles.silverImg} src={Assets.common.silverDialog} />}
        {dialogGrade == 2 &&<Image className={styles.img} src={Assets.common.goldDialog} />}
        {dialogGrade == 3 &&<Image className={styles.img} src={Assets.common.diamondDialog} />}
        <View className={`iconfont iconguanbi1 ${styles.close}`} onClick={onClose} />
      </AtModal>
    </View>
  );
}

export default UpgradeTip;