import './Board.css';

function Board() {
  const card = [
    {
      id: 1,
      cardName: 'To Do',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 2,
      cardName: 'In Progress',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 3,
      cardName: 'In Review',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 4,
      cardName: 'Done',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 1,
      cardName: 'To Do',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 2,
      cardName: 'In Progress',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 3,
      cardName: 'In Review',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    },
    {
      id: 4,
      cardName: 'Done',
      tickets: [
        {
          ticketId: 101,
          title: 'Ticket Title',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 102,
          title: 'Ticket Second',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 103,
          title: 'Ticket Third',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 104,
          title: 'Ticket Fourth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        },
        {
          ticketId: 105,
          title: 'Ticket Fifth',
          desciption: 'Ticket Description',
          status: 1,
          created: new Date(),
          updated: new Date()
        }
      ]
    }
  ];
  return (
    <div className="h-full board-design p-10">
      <div className="w-full mb-5">
        <div>
          <label>Projects / Projectname.......</label>
        </div>
        <div>
          <label>Project type</label>
        </div>
      </div>

      <div className="flex mb-5">
        <input placeholder="search" className="border p-1 pl-4 rounded-md border-black" />
      </div>

      <div className="">
        <div className="scrolling-wrapper">
          {card.map((cardd) => {
            return (
              <div key={cardd.id} className="card m-2 ">
                <label className="items-center">{cardd.cardName}</label>
                <div>
                  {cardd.tickets.map((ticket) => {
                    return (
                      <div key={ticket.ticketId} className="inner-card">
                        <span>{ticket.title}</span>
                        <span>{ticket.ticketId}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Board;
