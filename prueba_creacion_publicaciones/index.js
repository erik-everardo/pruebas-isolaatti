const count = 10000;

async function test() {
    for(let i = 1; i < count; i++){
        await fetch("http://10.0.0.9:5000/api/Posting/Make", {
  "headers": {
    "accept": "*/*",
    "accept-language": "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "client-id": "c6052c2c-4129-4746-9bc0-ef803d133140",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sessiontoken": "6403db7bfa0ca3807ad14e4f.7c2db7a6-0b0a-4bd7-9c70-434bc8ceb419.ZWJCfDThfBz+XP1AjgBAyJSoD8S7NHOIT931fKwttUUkA/hPvRJJt4/PB8QhUgEmx9YrtZti/gRc3US+3tiguw==",
    "cookie": ".AspNetCore.Antiforgery.5mYKsGQUxrs=CfDJ8KPbFtRXlK1MmwCVdHF60l6eW6fu7yUAq5qkrzIMB2q5UcxWTxUgw8MuItqPo7dF6depqjj-YFhin0K1oo1jt6-Qz1likmplUGnhPeae6HLQBJPNUR82fUG-jbhadOozlWsJQG-XR_FMLHm4gc3NIVg; isolaatti_user_session_token=6403db7bfa0ca3807ad14e4f.7c2db7a6-0b0a-4bd7-9c70-434bc8ceb419.ZWJCfDThfBz%2BXP1AjgBAyJSoD8S7NHOIT931fKwttUUkA%2FhPvRJJt4%2FPB8QhUgEmx9YrtZti%2FgRc3US%2B3tiguw%3D%3D",
    "Referer": "http://10.0.0.9:5000/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"privacy\":2,\"content\":\"Hey\",\"audioId\":null,\"squadId\":null}",
  "method": "POST"
});
    }
}

test()