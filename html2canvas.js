上次说了实现html到图片的转换，使用了svg，后来发现有线程的第三方js可以使用。
这个maven下的代码
 <dependency>
  <groupId>org.webjars</groupId>
  <artifactId>html2canvas</artifactId>
  <version>0.4.1</version>
</dependency>
这个html2canvas.js，可以满足要求，
核心代码：
    $("#submit").click(function(){
        html2canvas($("body"),{
            onrendered:function(canvas){
                  dataURL =canvas.toDataURL("image/png");
                  $.post('/upload', {"data":dataURL}, function(json){
                      alert(json.msg);
                  }, 'json');
              }
          })
     })
     这里是一个点击事件，body时整个页面的body包含的内容。dataURL就是一个base64的吗，通过这个post传递到后台。
     
 后台：
        String data = request.getParameter("data");
        byte[] bt = Base64.getDecoder().decode(data.substring("data:image/png;base64,".length()).getBytes());//截取到base64码
        
        String path="D:/" + new Date().getTime()+"a.png";
        System.out.println("path:" + path);
        File newFile=new File(path);
        
        try {
            FileUtils.writeByteArrayToFile(newFile, bt);//将bt写入到具体的文件中
        } catch (IOException e) {
            result = 0;
            msg = "上传失败";
            e.printStackTrace();
        }
    
    从上面可以看出整体代码更加简介，但是需要引入一个第三方的js，之前的方法也可以完成，两者之前的取舍自己权衡一下。
