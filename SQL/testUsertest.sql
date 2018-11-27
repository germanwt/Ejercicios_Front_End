/* 1. Cantidad de registros en la tabla de vuelos */
SELECT count(*) FROM USAirlineFlights2.Flights; 

/* 2. Retraso promedio de salida y llegada segun aeropuerto de origen */
SELECT Origin, avg (ArrDelay), avg(DepDelay) from USAirlineFlights2.Flights group by Origin; 

/* 3. Retraso promedio de llegada de los vuelos, por meses y según el aeropuerto origen */

SELECT Origin, colYear as Año, colMonth as Mes, if ( AVG(Arrdelay)>= 1, 'RETRASO',Null) as 
Retraso FROM USAirlineFlights2.Flights where Arrdelay >= 1 
group by Origin, colYear, colMonth order by Origin, colYear,colMonth; 


/* 4. Retraso promedio de llegada de los vuelos, por meses y según el aeropuerto origen. Ahora quieren que en vez
del código del aeropuerto se muestra el nombre de la ciudad. */

SELECT City, colYear as Año, colMonth as Mes, if ( AVG(Arrdelay)>= 1, 'RETRASO',Null) as 
Retraso FROM USAirlineFlights2.Flights 
INNER JOIN USAirports on USAirlineFlights2.Flights.Origin = USAirlineFlights2.USAirports.IATA where Arrdelay >= 1 
group by Origin, colYear, colMonth order by Origin, colYear,colMonth; 

/* 5. Las compañías con más vuelos cancelados. Además, deben estar ordenadas de forma 
que las compañías con más cancelaciones aparezcan las primeras. */

SELECT Description, Count(*)  From USAirlineFlights2.Flights 
INNER JOIN Carriers on USAirlineFlights2.Flights.UniqueCarrier = USAirlineFlights2.Carriers.CarrierCode 
where Cancelled = 1 group by Description order by count(*) desc; 



/* 6. El identificador de los 10 aviones que más distancia han recorrido haciendo vuelos. */

Select TailNum, sum(Distance) from  USAirlineFlights2.Flights where TailNum != 'NA' group by TailNum 
order by sum(Distance) desc  limit 10; 



/* 7. Compañías con su retraso promedio sólo de aquellas las que sus vuelos
llegan a su destino con un retraso promedio mayor de 10 minutos */

select description as Compañia, avg(Arrdelay) as Retraso_Prom from USAirlineFlights2.Flights 
LEFT JOIN Carriers on USAirlineFlights2.Flights.UniqueCarrier = 
USAirlineFlights2.Carriers.CarrierCode where (Cancelled = 0 and 
 Arrdelay >= 10 ) group by description order by avg(ArrDelay) asc; 





