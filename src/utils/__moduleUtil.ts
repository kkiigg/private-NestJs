// import fs from 'fs';
// import path from 'path';
// const fs = require('fs');
// const path = require('path');

// export const getDirModules = async (modulePath) => {
//   const modulesDir = path.join(process.cwd(), modulePath);
//   const res = [];

//   // 读取文件夹内容
//   const files = fs.readdirSync(modulesDir); // 同步读取目录内容
//   const promises = files.map(async (file) => {
//     // 获取文件的绝对路径
//     const filePath = path.join(modulesDir, file);

//     // 如果是文件并且是 .ts 文件，导入
//     if (fs.statSync(filePath).isFile() && file.endsWith('.ts')) {
//       try {
//         const m = await import(filePath);
//         console.log(`模块 ${file} 已加载`, m);
//         res.push(m);
//       } catch (error) {
//         console.error(`导入模块 ${file} 时出错:`, error);
//       }
//     }
//   });

//   // 等待所有文件导入完成
//   await Promise.all(promises);

//   return res;
// };
