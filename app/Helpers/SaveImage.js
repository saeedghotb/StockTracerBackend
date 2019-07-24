/**
 * this module gets image as a base64 string and converts it to png file, saves the image and returns the relative path
 */
module.exports = {
    getImage(dataString){
        try{
            let matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            let response = {}
            if(matches.length !== 3){
                return new Error('invalid input string');
            }
            response.type = matches[1];
            response.data = new Buffer(matches[2] ,'base64');
    
            return response;
        }catch(err){
        
        }
    }
}
