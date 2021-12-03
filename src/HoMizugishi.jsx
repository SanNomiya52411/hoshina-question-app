import React from 'react';
import './index.css';
import TextField from '@mui/material/TextField';

export default function TruePass() {
  return (
    <>
      <h3>サヒメリサーチの「Ｅ：」に接続します</h3>
      <h3>コマンドを実行してください</h3>
      <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="command"
              id="password"
              autoComplete="current-password"
            />
    </>
  );
}