function getDataIfOk(result) {
    return result.msg === "ok" ? result.data : result;
}

const { Bucket, Space, InitAPI, Common, File, testnetConfig, wellKnownAcct } = require("cess-js-sdk");
const mnemonic = "denial empower wear venue distance leopard lamp source off other twelve permit";
const accountId32 = "cXh5StobuVP4B7mGH9xn8dSsDtXks4qLAou8ZdkZ6DbB6zzxe";
testnetConfig.nodeURL = "wss://testnet-rpc2.cess.cloud/ws/";
const { api, keyring } = await InitAPI();

const CESS = {
    // Query bucket list
    overview: async () => {
        const oss = new Bucket(api, keyring, true);
        
        console.log("queryBucketList:");
        let bucketList = await oss.queryBucketList(accountId32).then((res) => {
            console.log(getDataIfOk(res));
            return getDataIfOk(res);
        });
        return bucketList;
        /*
        [
            {
                "objectList": [
                    "f1e3ff049a01e356cc3f03d821c2ff60da5db54d2e0b3490fd1e59c57cfdfad8"
                ],
                "key": "test1-1"
            },
            {
                "objectList": [],
                "key": "test3-31"
            },
        ]
        */
    },

    // list images from bucket
    list: async (bucketName) => {
        const oss = new File(api, keyring, testnetConfig.gatewayURL);
        let result = await oss.queryFileListFull(accountId32);
        result = getDataIfOk(result);
        return result.filter((item) => item.bucketName === bucketName);
    },

    //get the target file by hash
    download: async (hash, filename) => {
        const oss = new File(api, keyring, testnetConfig.gatewayURL);
        const result = await oss.downloadFile(hash, filename);
        console.log(result.msg === "ok" ? result.data : result);
    },

    //upload new image file to bucket
    upload: (folder, fa, pair) => {

    },

    //bucket management
    bucket: {
        //create a bucket as folder
        create: (folder, pair) => {

        },
        detail: (folder, pair) => {

        },
        delete: (folder, pair) => {

        }
    },
    file: {
        list: (pair) => {

        },
        upload: () => {

        },
        view: (hash, pair) => {

        },
    }
}

export default CESS;