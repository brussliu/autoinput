

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {


    if(request.action === 'getValue'){

      $('input').each(function() {
        // 这里的'this'指向当前遍历的DOM元素


        console.log($(this).attr('id'));

        console.log($(this).attr('type'));
        console.log($(this).val());

        
      });


    }
    if (request.action === 'setValue') {


        chrome.storage.local.get('formData', (result) => {
            const data = result.formData;
            if (data) {

                var item;
                var itemname;
                var itemvalue;

                $.each(data, function(index, value) {


                  item = value.split('=');
                  itemname = item[0];
                  itemvalue = item[1];

                  console.log(itemname);
                  console.log(itemvalue);


                  //document.querySelector("#" + itemname).value = itemvalue;

                  $("#" + itemname).val(itemvalue);


                  //console.log(index + " : " + value);
                });

              // 假设表单有固定的字段顺序
              // document.querySelector('#inputItem1').value = data[0];
              // document.querySelector('#inputItem2').value = data[1];

            }
        });






      //document.querySelector('#inputItem1').value = 'New Value'; // 替换为你要设置值的元素的选择器

    }
  });


//document.querySelector('#inputItem1').value = "abcdefg";
