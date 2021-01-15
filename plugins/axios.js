export default function({ $axios }) {
  $axios.onRequest(confing => {
    if (process.env.QIITA_TOKEN) {
      confing.headers.common['Authorization'] = process.env.QIITA_TOKEN
    }
    return confing
  })
}
