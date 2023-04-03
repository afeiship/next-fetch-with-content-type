export default (inWeiboResponse: string) => {
  if (typeof inWeiboResponse !== 'string') return inWeiboResponse;
  const json2str = inWeiboResponse.split('\n')[2];
  const data = JSON.parse(json2str);
  const target = data.data?.pics?.pic_1;
  const format = target?.pid.charAt(21) === 'g' ? 'gif' : 'jpg';
  return {
    code: data.code,
    format,
    ...target,
  };
};
