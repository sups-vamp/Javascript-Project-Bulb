function bulb(){
    let path = document.getElementsByTagName('img');
    if(path[0].src == 'file:///Users/supriyadas/Desktop/bulbProject/images/bulbOFF.jpeg')
        path[0].src = 'file:///Users/supriyadas/Desktop/bulbProject/images/bulbON.jpeg'
    else
    path[0].src = 'file:///Users/supriyadas/Desktop/bulbProject/images/bulbOFF.jpeg'

}