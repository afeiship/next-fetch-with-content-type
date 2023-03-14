import weibo2res from '../src';

describe('api.basic', () => {
  test('parse baisc data when sucess', () => {
    const res1 = `<meta http-equiv="Content-Type"content="text/html; charset=utf-8"/><script type="text/javascript">document.domain="sina.com.cn";</script>
{"code":"A00006","data":{"count":1,"data":"eyJ1aWQiOjM2NjE4MzI4MDMsImFwcCI6Im1pbmlibG9nIiwiY291bnQiOjEsInRpbWUiOjE2Nzg4MDA5OTUuMTIsInBpY3MiOnsicGljXzEiOnsid2lkdGgiOjE1MDQsInNpemUiOjE2MTY0NSwicmV0IjoxLCJoZWlnaHQiOjQwMCwibmFtZSI6InBpY18xIiwicGlkIjoiZGE0MzIyNjNneTFoYnpwdG9mdnA0ajIxNXMwYjR0Y3QifX19","pics":{"pic_1":{"width":1504,"size":161645,"ret":1,"height":400,"name":"pic_1","pid":"da432263gy1hbzptofvp4j215s0b4tct"}}}}`;
    const rs1 = weibo2res(res1);
    expect(rs1).toEqual({
      code: 'A00006',
      width: 1504,
      size: 161645,
      ret: 1,
      height: 400,
      name: 'pic_1',
      pid: 'da432263gy1hbzptofvp4j215s0b4tct',
    });
  });
});
