import {
  CircleFadingPlus,
  Clock,
  Dumbbell,
  Heart,
  House,
  MessageCircle,
  PartyPopper,
  StarIcon,
  Sun,
  Ticket,
  Users,
  Wine,
} from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Timeline = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      date="24/07/2025"
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<MessageCircle />}
    >
      <h3 className="vertical-timeline-element-title">
        Primeira vez que nos falamos
      </h3>
      <img
        src="src\assets\timeline-1.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="23/08/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<CircleFadingPlus />}
    >
      <h3 className="vertical-timeline-element-title">
        Dia em que nos assumimos nos stories
      </h3>
      <img
        src="src\assets\timeline-2.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="16/09/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<Dumbbell />}
    >
      <h3 className="vertical-timeline-element-title">
        Primeira vez que tiramos foto na academia
      </h3>
      <img
        src="src\assets\timeline-3.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="21/09/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<Heart />}
    >
      <h3 className="vertical-timeline-element-title">
        Dia em que começamos a namorar
      </h3>
      <img
        src="src\assets\timeline-4.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="03/10/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<Users />}
    >
      <h3 className="vertical-timeline-element-title">
        Dia em que conheci sua família
      </h3>
      <img
        src="src\assets\timeline-5.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="30/10/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<House />}
    >
      <h3 className="vertical-timeline-element-title">
        Primeira vez que fui na sua casa durante semana
      </h3>
      <img
        src="src\assets\timeline-6.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="14/11/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<Ticket />}
    >
      <h3 className="vertical-timeline-element-title">
        Primeiro show que fomos juntos
      </h3>
      <img
        src="src\assets\timeline-7.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="21/11/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<PartyPopper />}
    >
      <h3 className="vertical-timeline-element-title">
        Comemorando 2 meses de namoro
      </h3>
      <img
        src="src\assets\timeline-8.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="21/12/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<Wine />}
    >
      <h3 className="vertical-timeline-element-title">
        Saindo com seus amigos pela primeira vez
      </h3>
      <img
        src="src\assets\timeline-9.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="30/12/2025"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<Sun />}
    >
      <h3 className="vertical-timeline-element-title">
        Indo à praia juntos pela primeira vez
      </h3>
      <img
        src="src\assets\timeline-10.jpeg"
        alt="Placeholder"
        className="my-4 h-96 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="01/01/2026"
      contentArrowStyle={{ borderRight: "7px solid  #5C2A3D" }}
      iconStyle={{ background: "#5C2A3D", color: "#fff" }}
      icon={<Clock />}
    >
      <h3 className="vertical-timeline-element-title">
        Primeiro ano novo juntos
      </h3>
      <img
        src="src\assets\timeline-11.jpeg"
        alt="Placeholder"
        className="my-4 rounded-lg"
      />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: "#fad771", color: "#fff" }}
      icon={<StarIcon />}
    />
  </VerticalTimeline>
);
