/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BluetoothEscposPrinter} from 'react-native-bluetooth-escpos-printer';

const SamplePrint = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center',
        }}>
        TEST PRINT
      </Text>
      <View style={styles.btn}>
        <Button
          onPress={async () => {
            await BluetoothEscposPrinter.printBarCode(
              '123456789012',
              BluetoothEscposPrinter.BARCODETYPE.JAN13,
              3,
              120,
              0,
              2,
            );
            await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
          }}
          title="Print BarCode"
        />
      </View>
      <View style={styles.btn}>
        <Button
          onPress={async () => {
            await BluetoothEscposPrinter.printQRCode(
              'http://localhost:3000',
              280,
              BluetoothEscposPrinter.ERROR_CORRECTION.L,
            ); //.then(()=>{alert('done')},(err)=>{alert(err)});
            await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
          }}
          title="Print QRCode"
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Print Text"
          onPress={async () => {
            try {
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
              await BluetoothEscposPrinter.printText(
                'Penerima: John Doe\r\n',
                {},
              );
              await BluetoothEscposPrinter.printText(
                'Alamat: Jl. Thamrin\r\n',
                {},
              );
              await BluetoothEscposPrinter.printText(
                'Harga Kirim: Rp. 25.000\r\n',
                {},
              );
              await BluetoothEscposPrinter.printText(
                'Estimasi: 3 hari kerja\r\n',
                {},
              );
              await BluetoothEscposPrinter.printQRCode(
                'http://localhost:3000',
                280,
                BluetoothEscposPrinter.ERROR_CORRECTION.L,
              );
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            } catch (e) {
              alert(e.message || 'ERROR');
            }
          }}
        />
      </View>
    </View>
  );
};

export default SamplePrint;

const styles = StyleSheet.create({
  btn: {
    marginBottom: 8,
  },
});
