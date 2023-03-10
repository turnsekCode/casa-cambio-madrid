import React, { useState, useRef } from "react";
import styles from "./estilosConversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import ImportExportIcon from "@mui/icons-material/ImportExport";
//import { useFetchData } from "../../utilities/DataTiendas";

const Comprar = ({ datos }) => {
  //const { data, loading } = useFetchData();
  const dataCompras = datos?.result?.Tarifas?.Divisas_Compra;
  const dataReverse = [...dataCompras].reverse();
  const [selectDivisa, setSelectDivisa] = useState(true);
  const [switched, setSwitched] = useState(null);
  const [select, setSelect] = useState(null);
  const precioLibra = dataCompras[29]?.Productos[0].Precio / 1000;
  const precioDolar = dataCompras[28]?.Productos[0].Precio / 1000;
  const [valorMoneda, setValorMoneda] = useState("0");
  const [DataAcronimo, setAcronimo] = useState(<PowerInputIcon />);
  //const [DataNombre, setDataNombre] = useState("");
  const [valorInput, setValorInput] = useState("");
  const precioDividido = valorMoneda / 1000;
  const precioDividido2 = 1 / precioDividido;
  const valorFinal = valorInput * precioDividido;
  const valorFinal2 = valorInput / precioDividido;
  const captureCodigo = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    //setDataNombre(e.target.dataset.nombre);
    setValorMoneda(e.target.dataset.precio);
  };
  const MonedaSeleccionada = () => {
    setSelectDivisa(false);
  };

  const captureHabitual = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    setValorMoneda(e.target.dataset.precio);
    setSelectDivisa(false);
  }; /*
  const seleccion = () => {
    setSelectOpen(true);
  };*/
  const refInput1 = useRef();
  const refInput2 = useRef();

  const calcularCambio = (event) => {
    const { id, value: valor } = event.target;
    let cambio = 0;
    let precio1 = precioDividido2;
    if (id === "input-izquierdo") {
      // si cambia el input izquierdo, calcula el derecho
      cambio = valor * precio1;
      refInput2.current.value = cambio.toFixed(2);
    }
    if (id === "input-derecho") {
      // si cambia el input derecho, calcula el izquierdo
      cambio = valor / precio1;
      refInput1.current.value = cambio.toFixed(2);
    }
  };
  console.log(switched);
  return (
    <div className={styles.bloqueDer}>
      <div className={styles.bloqueDivHabituales}>
        <div className={styles.bloqueTituloSuperior}>
          <h6>
            Conversor <span></span> de divisa
          </h6>
          <p className={styles.tituloDivisaHabitual}>Divisas m??s habituales</p>
        </div>

        <div className={styles.divisasHabituales}>
          <div
            className={styles.dolar}
            onClick={(e) => {
              captureHabitual(e);
            }}
            data-acronimo={dataReverse[1].Productos[0].Acronimo}
            data-precio={dataReverse[1].Productos[0].Precio}
          >
            <div
              className={styles.imgMoneda}
              onClick={(e) => {
                captureHabitual(e);
              }}
              data-acronimo={dataReverse[1].Productos[0].Acronimo}
              data-precio={dataReverse[1].Productos[0].Precio}
            >
              <img
                src="/banderaUSA.png"
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[1].Productos[0].Acronimo}
                data-precio={dataReverse[1].Productos[0].Precio}
              />
              <span
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[1].Productos[0].Acronimo}
                data-precio={dataReverse[1].Productos[0].Precio}
              >
                USD
              </span>
            </div>
            <div className={styles.nombreMoneda}>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[1].Productos[0].Acronimo}
                data-precio={dataReverse[1].Productos[0].Precio}
              >
                D??lar USA
              </p>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[1].Productos[0].Acronimo}
                data-precio={dataReverse[1].Productos[0].Precio}
              >
                <span
                  onClick={(e) => {
                    captureHabitual(e);
                  }}
                  data-acronimo={dataReverse[1].Productos[0].Acronimo}
                  data-precio={dataReverse[1].Productos[0].Precio}
                >
                  {precioDolar.toFixed(4)}
                </span>
              </p>
            </div>
          </div>
          <div
            className={styles.libra}
            onClick={(e) => {
              captureHabitual(e);
            }}
            data-acronimo={dataReverse[0].Productos[0].Acronimo}
            data-precio={dataReverse[0].Productos[0].Precio}
          >
            <div
              className={styles.imgMoneda}
              onClick={(e) => {
                captureHabitual(e);
              }}
              data-acronimo={dataReverse[0].Productos[0].Acronimo}
              data-precio={dataReverse[0].Productos[0].Precio}
            >
              <img
                src="/banderaGBP.png"
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[0].Productos[0].Acronimo}
                data-precio={dataReverse[0].Productos[0].Precio}
              />
              <span
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[0].Productos[0].Acronimo}
                data-precio={dataReverse[0].Productos[0].Precio}
              >
                GBP
              </span>
            </div>
            <div className={styles.nombreMoneda}>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[0].Productos[0].Acronimo}
                data-precio={dataReverse[0].Productos[0].Precio}
              >
                Libra Esterlina
              </p>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[0].Productos[0].Acronimo}
                data-precio={dataReverse[0].Productos[0].Precio}
              >
                <span
                  onClick={(e) => {
                    captureHabitual(e);
                  }}
                  data-acronimo={dataReverse[0].Productos[0].Acronimo}
                  data-precio={dataReverse[0].Productos[0].Precio}
                >
                  {precioLibra.toFixed(4)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contenedorInputSuperior}>
        <div className={styles.bloqueIzqInput}>
          <div
            className={styles.select}
            onClick={() => {
              setSelect(!select);
            }}
          >
            {DataAcronimo} <KeyboardArrowDownIcon />
            <div
              className={
                select
                  ? `${styles.select_monedas} ${styles.select_activo}`
                  : `${styles.select_monedas}`
              }
            >
              {dataReverse?.map((data, i) => (
                <div
                  key={i}
                  className={styles.contenedor_list}
                  data-acronimo={data?.Productos[0].Acronimo}
                  data-precio={data?.Productos[0].Precio}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                  }}
                >
                  <div className={styles.bandera}>
                    <img
                      src="/USD.png"
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                    />
                  </div>
                  <div className={styles.moneda}>
                    <p
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                    >
                      {data?.Productos[0].Acronimo}
                    </p>
                    <span
                      className={styles.nombre}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                    >
                      {data?.Productos[0].Nombre}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            "Selecciona Divisa"
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  style={{ border: "none" }}
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  readOnly
                  //id="input-izquierdo"
                  //ref={refInput1}
                  //onChange={calcularCambio}
                  value={valorFinal2.toFixed(2)}
                  //onChange={(event) => setValorInput(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  //readOnly
                  //id="input-izquierdo"
                  //ref={refInput1}
                  //onChange={calcularCambio}
                  //value={valorFinal.toFixed(2)}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              )}
              <span>{DataAcronimo}</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1{DataAcronimo} = {precioDividido.toFixed(4)}EUR
            </p>
          )}
        </div>
      </div>
      <div className={styles.botonSwith}>
        <ImportExportIcon
          onClick={(e) => {
            setSwitched(!switched);
          }}
        />
      </div>
      <div className={styles.contenedorInputInferior}>
        {selectDivisa ? (
          <span>{DataAcronimo}</span>
        ) : (
          <div className={styles.monedaInferior}>EUR</div>
        )}
        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            "Seleccione Divisa"
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  //id="input-derecho"
                  //ref={refInput2}
                  //onChange={calcularCambio}
                  //value={valorFinal.toFixed(2)}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  //id="input-derecho"
                  //ref={refInput2}
                  //onChange={calcularCambio}
                  value={valorFinal.toFixed(2)}
                  readOnly
                  style={{ border: "none" }}
                  //onChange={(event) => setValorInput(event.target.value)}
                />
              )}
              <span>EUR</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1EUR = {precioDividido2.toFixed(4)}
              {DataAcronimo}
            </p>
          )}
        </div>
      </div>
      <a className={styles.botonLlamarTienda} href="tel:">
        LLAMAR A TIENDA
      </a>
    </div>
  );
};

export default Comprar;
