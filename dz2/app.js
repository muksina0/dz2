   numbers = [10, 20, 30, 50, 235, 3000];

for (let num of numbers) {
    let firstElement = num.toString()[0];
    if (firstElement ==='1' || firstElement === '2' || firstElement === '5') {
        console.log(num);
    }
}
   for (let i = 20; i >= 0; i--) {
       console.log(i);
   }
   let trafficLight = {
       'красный': 'стоп',
       'желтый': 'приготовьтесь',
       'зеленый': 'идти '
   };

   let color = prompt('Введите цвет светофора (красный, желтый, зеленый):').toLocaleLowerCase()

   if (trafficLight[color]) {
       alert(trafficLight[color]);
   } else {
       alert('Введите правильный цвет: красный, желтый, зеленый');
       }





