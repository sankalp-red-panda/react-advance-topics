import React from 'react'
const teams=[{club:"Real Madrid C.F",titles:"33",points:"90"},{club:"F.C. Barcelona",titles:"24",points:89},{club:"Club de Atletico de Madrid",titles:"2",points:"78"}]
function Teams() {
    return (
        <div>
            {teams.map(team=><div className="card"><div className="card-body"><h3>{team.club}</h3><p>titles-{team.titles}</p><p>Points-{team.points}</p></div></div>)}
        </div>
    )
}

export default Teams
