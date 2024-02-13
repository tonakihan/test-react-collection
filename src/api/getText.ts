import axios from 'axios';

async function getText(sentences: string) {
  const res = await axios.get<string>('https://baconipsum.com/api/', {
    params: {
      type: 'all-meat',
      sentences,
      format: 'text',
    }
  });

  return res;
}

export default getText;