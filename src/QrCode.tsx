import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { useIonAlert } from '@ionic/react';
import { resolve } from 'dns';

export const Qrc = () => {
  const startScan = async () => {
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      console.log(result.content);
    }
  };
  const checkPermission = async () => {
    const [presentAlert] = useIonAlert();
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        resolve(true);
      } else if (status.denied) {
        const alert = await presentAlert({
          header: 'No permission',
          subHeader: 'Please allow camera access in your',
          message: 'This is an alert!',
          buttons: [{
            text: 'NO',
            role: 'Cancel'
          },
          {
            text: 'Open Settings',
            handler: () => {
              BarcodeScanner.openAppSettings();
              resolve(false);
            }
          }],
        });
        await presentAlert;
      } else {
        resolve(false)
      }
    })
  }
}


