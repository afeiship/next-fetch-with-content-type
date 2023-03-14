export default (inWeiboResponse: string) => {
  const json2str = inWeiboResponse.split('\n')[1];
  const data = JSON.parse(json2str);
  const target = data.data?.pics?.pic_1;
  return {
    code: data.code,
    ...target,
  };
};
