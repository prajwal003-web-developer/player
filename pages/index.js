import React from "react";
import { servers} from "./player/index"

const index =  () => {
 const num = servers.length
 
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Arial, sans-serif;
          padding:0;
          margin:0;
        }

        body {
          margin: 0;
        }

        .container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
        }

        .card {
          width: 100%;
          max-width: 400px;
          background: #020617;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          color: #fff;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-top: 12px;
          font-size: 14px;
          color: #cbd5f5;
        }

        input, select, button {
          width: 100%;
          padding: 10px;
          margin-top: 6px;
          border-radius: 6px;
          border: none;
          font-size: 14px;
        }

        input, select {
          background: #1e293b;
          color: #fff;
        }

        .row {
          display: flex;
          gap: 10px;
        }

        button {
          margin-top: 20px;
          background: #2563eb;
          color: #fff;
          cursor: pointer;
        }

        button:hover {
          background: #1d4ed8;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>Open Player</h2>

          <form action="/player" method="GET">
            <label>Server</label>
            <select name="server" required>
              <option value="">Select server</option>
              {
                Array.from({length:num}).map((_,idx)=>{
                  return(
                    <option key = {idx} value={idx+1}>Server {idx+1}</option>
                  )
                })
              }
            </select>

            <label>Type</label>
            <select name="type" required>
              <option value="">Select type</option>
              <option value="movie">Movie</option>
              <option value="tv">TV</option>
            </select>

            <label>ID</label>
            <input type="text" name="id" placeholder="Enter ID" required />

            <div className="row">
              <div style={{ width: "100%" }}>
                <label>Season</label>
                <input type="number" name="season" placeholder="Season" />
              </div>

              <div style={{ width: "100%" }}>
                <label>Episode</label>
                <input type="number" name="episode" placeholder="Episode" />
              </div>
            </div>

            <button type="submit">Go</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
