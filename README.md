# Заметки по ходу обучения и работы над приложением

npm start - для запуска react приложения

Компоненты следует называть в CamelCase нотации, поскольку html тэги начинаются с маленькой буквы.
Так и визуально проще определить где хтмл, а где кастомный компонент, и вроде как движок быстрее понимает (это еще проверить надо).

Чтобы добавить стиль в jsx, вместо class (как я писал бы в обычном html внутри тега) нужно писать className.

Каждый компонент - это JS функция, которая возвращает JSX код (подобие хтмл). На вход этой функции можно и нужно подавать пропсы. Через них достигается динамичность. В App.js мы добавляем наш компонент и внутри тега прописываем свойства как в хтмл. А в файле компонента через точку и "{}" используем эти пропсы, например, props.title.


