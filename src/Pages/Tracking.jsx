import React from 'react'
import Table from "../components/base/Table";

class Tracking extends React.Component {

    render() {
        const header = ["Reference No.", "Tracking No.", "Origin", "Destination",
            "Parcel", "Collection Date", "Delivery Date", "Status"]
        const data = [
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '0'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'En Transito', '1'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '0'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'En Transito', '1'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Salio de Cento', '2'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
            ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
        ]

        return <>
            <div>
                <div className={"container"}>
                    <form className={"row g-1"}>
                        <div className="col-auto">
                            <input type="text" className="form-control" id="trackingNum"
                                   placeholder="Search tracking number"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Track</button>
                        </div>
                        <div className="col-auto me-1 ml-auto">
                            <input type="date" className="form-control" id="trackingDate"/>
                        </div>
                        <div className="col-auto me-0 ml-0">
                            <button className="btn btn-outline-ot-gray4 mb-3">Download Stats</button>
                        </div>
                    </form>
                    <Table data={data} header={header}/>
                </div>
            </div>
        </>
    }
}

export default Tracking;