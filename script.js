marcas = new Array;

marcas = [["L", "G", "X", "X", "V", "I", "V", "O", "V", "A", "G", "H", "M"],
          ["E", "T", "I", "N", "O", "C", "O", "P", "F", "R", "E", "E", "D"],
          ["N", "A", "A", "N", "A", "P", "P", "L", "E", "G", "B", "M", "R"],
          ["O", "V", "O", "P", "I", "T", "Y", "E", "H", "O", "R", "B", "E"],
          ["V", "N", "M", "I", "T", "F", "B", "B", "S", "P", "A", "E", "A"],
          ["O", "K", "I", "E", "D", "O", "T", "O", "O", "P", "T", "L", "L"],
          ["S", "A", "M", "W", "D", "E", "U", "S", "T", "O", "I", "E", "M"],
          ["M", "D", "E", "A", "L", "E", "V", "A", "M", "B", "P", "V", "E"],
          ["E", "G", "G", "U", "P", "O", "S", "I", "T", "I", "V", "O", "M"],
          ["P", "M", "A", "H", "C", "S", "A", "M", "S", "U", "N", "G", "E"]];

binario = new Array;

binario = [[1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
           [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
           [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
           [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
           [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
           [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
           [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
           [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0]];

document.write("<h1 align='center'>Marcas de celulares</h1>")

document.write("<table border='1' align='center'>");

        for(l = 0; l < 10; l++) {
            document.write("<tr>");
            for(c = 0; c < 13; c++) {

                if(binario[l][c] == 1) {
                document.write("<td bgcolor='#2afb9d' width='50' height='50'>" + marcas[l][c] + "</td>");
                }

                else{
                    document.write("<td width='50' height='50'>" + marcas[l][c] + "</td>");
                }
            }
            document.write("</tr>")
        } 

document.write("</table>");


    