// main.js设置全局过滤器

// 性别对应
export function genderType (value) {
  const arr = [
    { value: '0', label: '男' },
    { value: '1', label: '女' }
  ]
  for (const e of arr) {
    if (value == e.value) return e.label
  }
}

// 千分位过滤
/*
 *参数说明
 *s：要格式化的数字
 *n：保留几位小数
*/
export function fSum (s) {
  if (s || s === '0' || s === 0) {
    var n = 2
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
    // s = parseFloat(s).toFixed(n)
    var l = s.split('.')[0].split('').reverse()
    var r = s.split('.')[1]
    var t = ''
    if (l[l.length - 1] == '-') {
      for (let i = 0; i < l.length - 2; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
      }
      t += l[l.length - 2] + '-'
    } else {
      for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
      }
    }
    return t.split('').reverse().join('') + '.' + r
  } else {
    return ''
  }
}
