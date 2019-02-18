var fs = require('fs');
// 

function readReqFile(furl, callback) {
    let files = [{ '/webpage1': './webpage1.html' },
    { '/webpage2': './webpage2.html' },
    { '/webpage3': './webpage3.html' },
    { '/webpage4': './webpage4.html' },
    { '/about': './about.html' },
    { '/home': './home.html' }
    ];
    for (var obj in files) {
        // console.log("OBJ ", obj);
        if (files.hasOwnProperty(obj)) {
            for (var prop in files[obj]) {
                if (furl === prop)
                    if (files[obj].hasOwnProperty(prop)) {
                        x = files[obj][prop];
                        fs.readFile(x, (err, data) => {
                            if (err) {
                                console.log(err.message);
                                callback(err);
                            }
                            callback(null, data);
                        });


                    }
            }
        }
    }

}
module.exports = {
    readReqFile
}