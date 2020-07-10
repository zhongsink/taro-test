// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
// eslint-disable-next-line import/no-commonjs
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: false,
      useBuiltIns: 'usage',
      targets: {
        ios: '8',
        android: '5'
      },
      debug: true,
    }]
  ]
}
