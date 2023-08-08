// Check A photo file with image extensions
// 

function isValidPhotoName(photoname, imageExtension){
    if(typeof photoname !== 'string' || !Array.isArray(imageExtension)){
        return 'Please Provide a Valid input';
    }
    else{
        for(let item of imageExtension){
            // if(photoname.toLowerCase.endsWith(imageExtension(i).toLowerCase))
            if(photoname.toLowerCase().endsWith(item.toLowerCase())){
                return true;
            }
        }
        return false;

    }

}
const photo = 'image.jpg';
const extensions = ['.img', '.jpg', '.jpeg,', '.gif', '.ico', '.JPEG'];
console.log(isValidPhotoName(photo, extensions));