import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


export function usePhotoGallery() {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
    const takePhoto = async () => {
        startScan()
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ];
        setPhotos(newPhotos);
        startScan();
    };
    return {
        photos,
        takePhoto,
    };
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}

export const startScan = async () => {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
        console.log(result.content);
    }
};

export const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
};