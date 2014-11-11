UX Rocket Popup
==============
Popup, yeni pencerede açılacak uygulama sayfaları için kullanılmaktadır. Erişilebilirlik ve layout/behavior ayrımı açısından önemli bir plugindir. Hem fare ile bağlantıya tıklandığında, hem de tab ile bağlantı focus modundayken aktif edildiğinde yeni pencerenin açılmasını sağlar.


```HTML
<a href="http://www.turkcell.com.tr" class="popup" data-size="800,600">Yeni Pencere</a>
```

### Notlar
Semantik ve erişilebilir kullanım açısından, popup adresleri mutlaka bir `a` içerisindeki `href` ile tanımlanmalıdır.


### Tanımlar
Property 			 | Default 			| Açıklama
-------------------- | ---------------- | ------------------------------------------------------------------------
resizable            | no               | Açılan pencerenin boyutunun değiştirip, değiştirilemeyeceğini belirtir.
scrollbars           | yes              | Açılan pencerede scrollbarın gözüküp, gözükmeyeceğini belirtir.
width                | 1100             | Açılan pencerenin pixel olarak genişliğini belirtir.
height               | 700              | Açılan pencerenin pixel olarak yüksekliğini belirtir.
top                  | 0                | Açılan pencerenin ekranın üst tarafına olan uzaklığını pixel olarak belirtir.
left                 | 0                | Açılan pencerenin ekranın sol tarafına olan uzaklığını pixel olarak belirtir.


Data Attribute 			   | &nbsp;
-------------------------- | -----
resizable                  | Açılan pencerenin boyutunun değiştirip, değiştirilemeyeceğini belirtir.
scrollbars                 | Açılan pencerede scrollbarın gözüküp, gözükmeyeceğini belirtir.
size                       | "genişlik,yükselik" şeklinde virgül ile ayrılmış açılan pencerenin boyutlarını belirtir.
top                        | Açılan pencerenin ekranın üst tarafına olan uzaklığını pixel olarak belirtir.
left                       | Açılan pencerenin ekranın sol tarafına olan uzaklığını pixel olarak belirtir.


### Public Metodlar
Method					   | Açıklama
-------------------------- | -------------------------------------------------------
$(selector).popup(options) | Bu method plugini manuel olarak bir elemana bağlamanızı sağlar.
$.uxpopup                  | Bu method pluginin detayını görmenizi sağlar.
$.uxpopup.version          | Sayfaya eklenmiş pluginin versiyon numarasını gösterir.
$.uxpopup.settings         | Aktif pluginin ayarlarını gösterir.
