import React, {useEffect, useState }from 'react';
import { Input, message, Table, Form, Button, InputNumber } from 'antd';
import useForm from '../../Hook/useForm.js'
function Home() {
  document.title = "Calculadora de camino mas corto"
  let datos = [[999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999],
                [999,999,999,999,999,999,999,999,999,999]]
  const agregar =[]
  const [form,formedit] = useForm();
  const [ruta,rutaedit] = useState(0);
  let recorrido = [1];
  const [caminado,caminoEdit] = useState(recorrido);


  const camino =  (t,v) =>{
      if(t[v] != 1) {
        camino(t,t[v]);
        recorrido.push("-")
        recorrido.push(t[v]);
      }
    }

    const Dijkstra = (w ,hasta)=>
  {    let l= new Array(hasta+1), r= new Array(hasta+1), t= new Array(hasta+1), min, vmin;
       for (let i = 2; i<=hasta; i++)
       {  l[i] = w[0][i-1];
          t[i] = 1;     }
       for (let x = 1; x < hasta; x++)
       {	min = 999;
         	for (let i = 2; i<= hasta; i++)
            if ( 0 <= l[i] && l[i] <= min)
              {  min = l[i];  vmin = i; }
         	for (let i=2; i<= hasta; i++)
  	    if (l[vmin]+w[vmin-1][i-1] < l[i])
               {	l[i] = l[vmin]+w[vmin-1][i-1];
  				t[i] = vmin; }
          r[vmin] = l[vmin];
          l[vmin] = -1;
       }
       camino(t, hasta);
       rutaedit(r[hasta]);
  }

    const conseguirDatos =()=>{

        const valores = Object.values(form);
        const llaves = Object.keys(form);
        let nodos = 1;
        for(let i = 0; i<llaves.length;i++){
          const donde = llaves[i].split(",");
          datos[donde[0]][donde[1]] = (valores[i] !== "") ? parseInt(valores[i],10):999;
          if(parseInt(donde[1],10)+1 > nodos){
            nodos = parseInt(donde[1],10)+1
          }
        }
        if(sejuega()){
          Dijkstra(datos,nodos);
          recorrido.push("-");
          recorrido.push(nodos);
          caminoEdit(recorrido);
        }
    }

    const sejuega= () =>{
      let se = 0;
      for(let i = 0; i<datos.length;i++){
        for(let j=0;j<datos[i].length;j++){
          if(datos[i][j] === 999) se++;
        }
      }
      if(se != 100) return true
      else return false;
    }

  return (
    <div className="negro">
      <div className="todo">
        <h1>Bienvenido a calcular la ruta mas corta</h1>
        <h2> Ingresa el costo entre un nodo y otro (si no hay ruta o no existe el nodo no igresar nada ) </h2>
        <h2> Ingresa el nodo con el que quieres iniciar en nodo 1 y al nodo que quieras llegar al ultimo dejando en 0 los nodos sobrantes</h2>
          <table>
            <tr>
              <th></th>
              <th>Nodo 1(A)</th>
              <th>Nodo 2(B)</th>
              <th>Nodo 3(C)</th>
              <th>Nodo 4(D)</th>
              <th>Nodo 5(E)</th>
              <th>Nodo 6(F)</th>
              <th>Nodo 7(G)</th>
              <th>Nodo 8(H)</th>
              <th>Nodo 9(I)</th>
              <th>Nodo 10(J)</th>
            </tr>
            <tr>
              <td>Nodo 1(A)</td>
              <td><input type="number" name="0,0" placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="0,1" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,2" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,3" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,4" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,5" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,6" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,7" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,8" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="0,9" placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 2(B)</td>
              <td><input type="number" name="1,0"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,1"  placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="1,2"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,3"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,4"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,5"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,6"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,7"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,8"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="1,9"  placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 3(C)</td>
              <td><input type="number" name="2,0"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,1"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,2"  placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="2,3"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,4"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,5"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,6"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,7"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,8"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="2,9"  placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 4(D)</td>
              <td><input type="number" name="3,0"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,1"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,2"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,3"  placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="3,4"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,5"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,6"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,7"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,8"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="3,9"  placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 5(E)</td>
              <td><input type="number" name="4,0"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,1"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,2"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,3"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,4"  placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="4,5"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,6"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,7"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,8"  placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="4,9"  placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 6(F)</td>
              <td><input type="number" name="5,0" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,1" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,2" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,3" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,4" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,5" placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="5,6" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,7" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,8" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="5,9" placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 7(G)</td>
              <td><input type="number" name="6,0" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,1" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,2" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,3" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,4" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,5" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,6" placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="6,7" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,8" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="6,9" placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 8(H)</td>
              <td><input type="number" name="7,0" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,1" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,2" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,3" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,4" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,5" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,6" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,7" placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="7,8" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="7,9" placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 9(I)</td>
              <td><input type="number" name="8,0" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,1" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,2" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,3" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,4" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,5" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,6" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,7" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="8,8" placeholder="0" onChange={e=>formedit(e)} disabled/></td>
              <td><input type="number" name="8,9" placeholder="0" onChange={e=>formedit(e)}/></td>
            </tr>
            <tr>
              <td>Nodo 10(J)</td>
              <td><input type="number" name="9,0" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,1" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,2" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,3" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,4" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,5" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,6" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,7" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,8" placeholder="0" onChange={e=>formedit(e)}/></td>
              <td><input type="number" name="9,9" placeholder="0" onChange={e=>formedit(e)} disabled/></td>
            </tr>
        </table>
        <Form layout = 'vertical'>
               <Button type="primary" onClick = {e => {conseguirDatos()}}>Calcula</Button>
        </Form>
        <h3>La ruta mas corta del nodo 1 al nodo final es de {ruta}</h3>
        <h3>Con la ruta de {caminado} </h3>
      </div>
    </div>
  );
}

export default Home;
