const form=document.getElementById("form")
const btn=document.getElementById("btn")
btn.onclick=(e)=>{
  e.preventDefault()
  const file=document.getElementById("image").files[0]
  const formData = new FormData(form);
formData.append('upload_preset', 'testMarket');
formData.append("file",file)
    fetch('https://api.cloudinary.com/v1_1/dgietnwua/image/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      const imageUrl = data.secure_url;
      console.log(imageUrl)
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
}