import { marked } from 'marked'
import * as sanitizeHtml from 'sanitize-html'

const worker: Worker = self as any

worker.addEventListener('message', (event) => {

    const text = event.data
    const html = sanitizeHtml(marked(text), { allowedTags: [...sanitizeHtml.defaults.allowedTags, 'h1', 'h2'] })
    worker.postMessage({ html })

    // console.log('Worker Received:', event.data)

    // let count: number = 1
    // while (count < 1_000_000_000) { // 最初から大きな値を入れないでください！
    //     count++
    // }

    // worker.postMessage({ result: event.data })


})