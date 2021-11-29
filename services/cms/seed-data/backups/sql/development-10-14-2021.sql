--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Coach; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Coach" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone,
    "updatedAt" timestamp(3) without time zone,
    name text DEFAULT ''::text NOT NULL,
    handle text DEFAULT ''::text NOT NULL,
    type text DEFAULT ''::text NOT NULL,
    "isAssistant" text DEFAULT ''::text NOT NULL,
    team text,
    image text
);


ALTER TABLE public."Coach" OWNER TO postgres;

--
-- Name: ColorScheme; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ColorScheme" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone,
    "updatedAt" timestamp(3) without time zone,
    "primary" text DEFAULT ''::text NOT NULL,
    secondary text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."ColorScheme" OWNER TO postgres;

--
-- Name: Image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Image" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone,
    "updatedAt" timestamp(3) without time zone,
    url text DEFAULT ''::text NOT NULL,
    type text,
    player text,
    team text
);


ALTER TABLE public."Image" OWNER TO postgres;

--
-- Name: Player; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Player" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone,
    "updatedAt" timestamp(3) without time zone,
    name text DEFAULT ''::text NOT NULL,
    handle text DEFAULT ''::text NOT NULL,
    slug text DEFAULT ''::text NOT NULL,
    height text DEFAULT ''::text NOT NULL,
    weight text DEFAULT ''::text NOT NULL,
    number text DEFAULT ''::text NOT NULL,
    "position" text DEFAULT ''::text NOT NULL,
    team text
);


ALTER TABLE public."Player" OWNER TO postgres;

--
-- Name: Team; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Team" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone,
    "updatedAt" timestamp(3) without time zone,
    name text DEFAULT ''::text NOT NULL,
    handle text DEFAULT ''::text NOT NULL,
    slug text DEFAULT ''::text NOT NULL,
    city text DEFAULT ''::text NOT NULL,
    abbreviation text DEFAULT ''::text NOT NULL,
    conference text DEFAULT ''::text NOT NULL,
    division text DEFAULT ''::text NOT NULL,
    established text DEFAULT ''::text NOT NULL,
    wins integer,
    losses integer,
    "winPercentage" double precision,
    "colorScheme" text
);


ALTER TABLE public."Team" OWNER TO postgres;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    name text DEFAULT ''::text NOT NULL,
    email text DEFAULT ''::text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: Coach; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Coach" (id, "createdAt", "updatedAt", name, handle, type, "isAssistant", team, image) FROM stdin;
ckurtr6m7942280hszylopsv4	2021-10-12 13:58:58.206	2021-10-14 08:00:00	Art Horne	1628765	Trainer	3	ckurtr72t1112380hs8x0kp6w2	ckurtr44f023180hs9y5a2fwf
ckurtr6m9942980hsifjgvsts	2021-10-12 13:58:58.21	2021-10-14 08:00:00	Mike D'Antoni	1783	Assistant Coach	2	ckurtr72y1113080hs005x0gxk	ckurtr44m024580hsqerb0muc
ckurtr6mh945780hsap91b57v	2021-10-12 13:58:58.231	2021-10-14 08:00:00	James Borrego	202435	Head Coach	1	ckurtr7311113780hsgrdqiegk	ckurtr452028080hs1mqqva1u
ckurtr6mj946480hs7tyv81yl	2021-10-12 13:58:58.236	2021-10-14 08:00:00	Jay Triano	2472	Assistant Coach	2	ckurtr7311113780hsgrdqiegk	ckurtr458029480hsn2eyacdt
ckurtr6ml947180hsyal0tt1s	2021-10-12 13:58:58.241	2021-10-14 08:00:00	Joe Sharpe	101278	Trainer	3	ckurtr7311113780hsgrdqiegk	ckurtr45c030180hs4gphd2rl
ckurtr6mn947880hsz7m30ora	2021-10-12 13:58:58.245	2021-10-14 08:00:00	Billy Donovan	1627310	Head Coach	1	ckurtr7341114480hs337eaj26	ckurtr45f030880hschiy1zc9
ckurtr6p3974480hsfg5dwjwv	2021-10-12 13:58:58.267	2021-10-14 08:00:00	Chris Fleming	1627604	Assistant Coach	2	ckurtr7341114480hs337eaj26	ckurtr45h031580hsepv50f80
ckurtr6mw950680hsbl69nzjh	2021-10-12 13:58:58.272	2021-10-14 08:00:00	JB Bickerstaff	2794	Head Coach	1	ckurtr7371115180hslnccru8a	ckurtr45u034380hs7j98r21i
ckurtr6mz951380hse3ufih4t	2021-10-12 13:58:58.276	2021-10-14 08:00:00	Antonio Lang	204238	Assistant Coach	2	ckurtr7371115180hslnccru8a	ckurtr47q051880hs5amozugq
ckurtr6p5975180hsc7hb6jtq	2021-10-12 13:58:58.284	2021-10-14 08:00:00	Lindsay Gottlieb	1629710	Assistant Coach	2	ckurtr7371115180hslnccru8a	ckurtr4bb081980hsnbzx79ed
ckurtr6n1952080hsr3dczklr	2021-10-12 13:58:58.28	2021-10-14 08:00:00	Mike Gerrity	202565	Assistant Coach	2	ckurtr7371115180hslnccru8a	ckurtr4bd082680hsqge4bmmq
ckurtr6n4952780hsldnsbkov	2021-10-12 13:58:58.291	2021-10-14 08:00:00	Zach Guthrie	1628785	Assistant Coach	2	ckurtr73a1115880hsxkdan1ud	ckurtr47z053980hsedn4y3a3
ckurtr6n9954180hsbj1kah9g	2021-10-12 13:58:58.299	2021-10-14 08:00:00	Dionne Calhoun	2871	Assistant Trainer	4	ckurtr73a1115880hsxkdan1ud	ckurtr484055380hs9qxmacq7
ckurtr6nf955580hs7sx7o335	2021-10-12 13:58:58.303	2021-10-14 08:00:00	Michael Malone	2610	Head Coach	1	ckurtr73c1116580hs3i36jjw5	ckurtr487056080hs5pun5ip0
ckurtr6nj956980hsb5a69g3t	2021-10-12 13:58:58.311	2021-10-14 08:00:00	Ryan Bowen	203391	Assistant Coach	2	ckurtr73c1116580hs3i36jjw5	ckurtr489056780hsy2rl95m6
ckurtr6pf978680hsgt444cl6	2021-10-12 13:58:58.481	2021-10-14 08:00:00	Dan Shimensky	1627167	Trainer	3	ckurtr73c1116580hs3i36jjw5	ckurtr4iu158980hs733db273
ckurtr6no958380hs5r7j751j	2021-10-12 13:58:58.329	2021-10-14 08:00:00	Tim Grgurich	1336	Assistant Coach	2	ckurtr73f1117280hsgklsbom1	ckurtr48j059580hs0mec34gq
ckurtr6p7975880hsiq63nfwr	2021-10-12 13:58:58.337	2021-10-14 08:00:00	Jim Scholler	201678	Trainer	3	ckurtr73f1117280hsgklsbom1	ckurtr48m060280hsnzmka8wq
ckurtr6nm957680hs6ezok6b5	2021-10-12 13:58:58.323	2021-10-14 08:00:00	Dwane Casey	1335	Head Coach	1	ckurtr73f1117280hsgklsbom1	ckurtr4bn085480hs7d9x5al8
ckurtr6pg979380hspn6vj3ai	2021-10-12 13:58:58.484	2021-10-14 08:00:00	Sean Sweeney	204085	Assistant Coach	2	ckurtr73f1117280hsgklsbom1	ckurtr4kf176480hs0xjifixi
ckurtr6mr949280hsc2hj0paq	2021-10-12 13:58:58.367	2021-10-14 08:00:00	Jarron Collins	204239	Assistant Coach	2	ckurtr73h1117980hsrqsjw8xn	ckurtr48u060980hsu9rbxatc
ckurtr6nu959780hsmg404j6w	2021-10-12 13:58:58.342	2021-10-14 08:00:00	Ron Adams	1796	Assistant Coach	2	ckurtr73h1117980hsrqsjw8xn	ckurtr49e062380hs9xtcfgew
ckurtr6pi980080hs9fxs2hai	2021-10-12 13:58:58.489	2021-10-14 08:00:00	Steve Kerr	204005	Head Coach	1	ckurtr73h1117980hsrqsjw8xn	ckurtr4bu086880hs6dwmcny4
ckurtr6o0961880hs5wqomaqq	2021-10-12 13:58:58.355	2021-10-14 08:00:00	Rick Higgins	1630277	Assistant Coach	2	ckurtr73k1118680hs60y14qgi	ckurtr49j063780hsufg0mbc6
ckurtr6ny961180hsksgrx036	2021-10-12 13:58:58.351	2021-10-14 08:00:00	John Lucas	1786	Assistant Coach	2	ckurtr73k1118680hs60y14qgi	ckurtr49m064480hsyv24ni6n
ckurtr6o3962580hs7siaq4rr	2021-10-12 13:58:58.359	2021-10-14 08:00:00	Keith Jones	1257	Trainer	3	ckurtr73k1118680hs60y14qgi	ckurtr49q065180hsmxgbqhe8
ckurtr6o5963280hsy7q7xymh	2021-10-12 13:58:58.363	2021-10-14 08:00:00	Greg Foster	203785	Assistant Coach	2	ckurtr73n1119380hs6h18kxhb	ckurtr49x066580hs1xek4vxv
ckurtr6pp982180hs574xlqs0	2021-10-12 13:58:58.517	2021-10-14 08:00:00	Lloyd Pierce	202603	Lead Assistant Coach	13	ckurtr73n1119380hs6h18kxhb	ckurtr4jf165980hs4f0re8cb
ckurtr6pn981480hs7hc3jmzc	2021-10-12 13:58:58.513	2021-10-14 08:00:00	Rick Carlisle	1320	Head Coach	1	ckurtr73n1119380hs6h18kxhb	ckurtr4ld187680hsak7dvre3
ckurtr6ps982880hsbwu3wvyt	2021-10-12 13:58:58.526	2021-10-14 08:00:00	Tyronn Lue	202978	Head Coach	1	ckurtr73q1120080hsuk9pz8mb	ckurtr4j0161080hseuyojnhv
ckurtr6o7963980hsfbzpimko	2021-10-12 13:58:58.384	2021-10-14 08:00:00	Frank Vogel	2345	Head Coach	1	ckurtr73t1120780hsfcm6d1g8	ckurtr4a4068680hszsv5g669
ckurtr6pw984280hsw8viz0jt	2021-10-12 13:58:58.534	2021-10-14 08:00:00	Quinton Crawford	1629748	Assistant Coach	2	ckurtr73t1120780hsfcm6d1g8	ckurtr4kb175080hs9v0rgioo
ckurtr6o9964680hsyrlhhce9	2021-10-12 13:58:58.392	2021-10-14 08:00:00	Taylor Jenkins	203624	Head Coach	1	ckurtr73w1121480hs5q03bem0	ckurtr4ac070780hsswwf59b0
ckurtr6ob965380hs8phsel75	2021-10-12 13:58:58.396	2021-10-14 08:00:00	David McClure	1628234	Assistant Coach	2	ckurtr73w1121480hs5q03bem0	ckurtr4ae071480hs8lkw7x8i
ckurtr6od966080hsif1njhvj	2021-10-12 13:58:58.4	2021-10-14 08:00:00	Eric Oetter	1630018	Trainer	3	ckurtr73w1121480hs5q03bem0	ckurtr4ag072180hs6hjg5pm7
ckurtr6q3986380hsi5w0qmoh	2021-10-12 13:58:58.552	2021-10-14 08:00:00	Pat St. Andrews	1628784	Assistant Coach	2	ckurtr7411122880hsbsw23one	ckurtr4kk177880hs2m7mjx4s
ckurtr6q6987080hsf5yfzj2w	2021-10-12 13:58:58.557	2021-10-14 08:00:00	Joseph Blair	974	Assistant Coach	2	ckurtr7441123580hswoadqvid	ckurtr4dh103680hs8bh1lphv
ckurtr6oh967480hs0m3jqrqs	2021-10-12 13:58:58.408	2021-10-14 08:00:00	Bob Beyer	2630	Assistant Coach	2	ckurtr7471124280hshmkzngtt	ckurtr4ak073580hsyebf5zmn
ckurtr6ok968180hsqlnky5pd	2021-10-12 13:58:58.412	2021-10-14 08:00:00	Roger Hinds	1370	Trainer	3	ckurtr74b1124980hs9jiumudw	ckurtr4an074280hszdtu3bbp
ckurtr6oo969580hsqhv7uj67	2021-10-12 13:58:58.42	2021-10-14 08:00:00	Dave Bliss	1629758	Assistant Coach	2	ckurtr74e1125680hs5fbtikqr	ckurtr4ap074980hs2qsl5fd9
ckurtr6or970280hsyart0bpz	2021-10-12 13:58:58.433	2021-10-14 08:00:00	Randy Ayers	1865	Assistant Coach	2	ckurtr74l1127780hsxilzh94e	ckurtr4av077080hs32q5bjn8
ckurtr6ot970980hspc3d3e69	2021-10-12 13:58:58.437	2021-10-14 08:00:00	Lindsey Harding	201046	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4ax077780hss62u07ju
ckurtr6ov971680hsf1d2lrnc	2021-10-12 13:58:58.442	2021-10-14 08:00:00	Wes Unseld	1018	Head Coach	1	ckurtr7501131980hsxu0tclct	ckurtr48e058180hsd12m9o2q
ckurtr6rq1003880hsxiv9zjr6	2021-10-12 13:58:58.731	2021-10-14 08:00:00	Dennis Williams	201666	Assistant Trainer	4	ckurtr7311113780hsgrdqiegk	ckurtr4fh124680hst4e6h4ra
ckurtr6rw1005980hsrkm5pl3z	2021-10-12 13:58:58.735	2021-10-14 08:00:00	Joshua Longstaff	204031	Assistant Coach	2	ckurtr7341114480hs337eaj26	ckurtr4fk125380hskxrdvefs
ckurtr6ry1006680hsgxdrhp9y	2021-10-12 13:58:58.74	2021-10-14 08:00:00	Micah Nori	202101	Assistant Coach	2	ckurtr73f1117280hsgklsbom1	ckurtr4bq086180hs9f0obkr1
ckurtr6rz1007380hs1kmugzpo	2021-10-12 13:58:58.745	2021-10-14 08:00:00	Mike Brown	1658	Assistant Coach	2	ckurtr73h1117980hsrqsjw8xn	ckurtr4iw159680hsf42wkbwf
ckurtr6s31008780hsutx1dt2b	2021-10-12 13:58:58.758	2021-10-14 08:00:00	Larry Drew	1271	Assistant Coach	2	ckurtr73q1120080hsuk9pz8mb	ckurtr4ch092480hshvbqixt3
ckurtr6s71010180hsd2wi3975	2021-10-12 13:58:58.789	2021-10-14 08:00:00	Phil Handy	203597	Assistant Coach	2	ckurtr73t1120780hsfcm6d1g8	ckurtr4cn094580hsquy701be
ckurtr6sd1012280hstb53se3r	2021-10-12 13:58:58.802	2021-10-14 08:00:00	Vitaly Potapenko	202433	Assistant Coach	2	ckurtr73w1121480hs5q03bem0	ckurtr4cw097380hsho615cgd
ckurtr6sh1013680hsdllwwqws	2021-10-12 13:58:58.806	2021-10-14 08:00:00	Darko Rajakovic	204011	Assistant Coach	2	ckurtr73w1121480hs5q03bem0	ckurtr4d0098080hszufp8gly
ckurtr6sk1014380hscm6jwb7h	2021-10-12 13:58:58.81	2021-10-14 08:00:00	Malik Allen	204229	Assistant Coach	2	ckurtr73y1122180hs7mhd2u3c	ckurtr4d2098780hs3vtw6np6
ckurtr6sm1015080hsjgqqf2ub	2021-10-12 13:58:58.817	2021-10-14 08:00:00	Jay Sabol	1281	Trainer	3	ckurtr73y1122180hs7mhd2u3c	ckurtr4d4099480hsvi37gzl7
ckurtr6st1017180hs1a3o53k1	2021-10-12 13:58:58.857	2021-10-14 08:00:00	Kevin Burleson	1628772	Assistant Coach	2	ckurtr7441123580hswoadqvid	ckurtr4df102980hsmu6lffyq
ckurtr6sv1017880hsmdzem6fm	2021-10-12 13:58:58.861	2021-10-14 08:00:00	Gregg Farnam	2146	Trainer	3	ckurtr7441123580hswoadqvid	ckurtr4dk104380hsp7up4662
ckurtr6sf1012980hspw47smo9	2021-10-12 13:58:58.773	2021-10-14 08:00:00	Stan Van Gundy	1277	Head Coach	1	ckurtr7471124280hshmkzngtt	ckurtr4dm105080hsr98l971e
ckurtr6sy1018580hsj2y90amf	2021-10-12 13:58:58.865	2021-10-14 08:00:00	Tom Maystadt	1630382	Trainer	3	ckurtr7471124280hshmkzngtt	ckurtr4dr106480hsnjh4j3gi
ckurtr6q9987780hs00wmih6n	2021-10-12 13:58:58.562	2021-10-14 08:00:00	Teresa Weatherspoon	100101	Assistant Coach	2	ckurtr7471124280hshmkzngtt	ckurtr4km178580hsc7nzhao2
ckurtr6t81021380hslrkuprqc	2021-10-12 13:58:58.889	2021-10-14 08:00:00	Mike Woodson	1285	Assistant Coach	2	ckurtr74b1124980hs9jiumudw	ckurtr4dv107880hsqfucmsdt
ckurtr6t31019980hsziropyfh	2021-10-12 13:58:58.877	2021-10-14 08:00:00	Tom Thibodeau	1301	Head Coach	1	ckurtr74b1124980hs9jiumudw	ckurtr4g9131680hsc46a7e8a
ckurtr6ta1022080hsci2f0ir4	2021-10-12 13:58:58.909	2021-10-14 08:00:00	Mark Daigneault	1627327	Head Coach	1	ckurtr74e1125680hs5fbtikqr	ckurtr4e1109980hsznxebbwr
ckurtr6qb988480hsfe3h4f2v	2021-10-12 13:58:58.57	2021-10-14 08:00:00	Mike Wilks	2366	Assistant Coach	2	ckurtr74e1125680hs5fbtikqr	ckurtr4j7163180hsumrs3lbm
ckurtr6tc1022780hsup790jri	2021-10-12 13:58:58.869	2021-10-14 08:00:00	Steve Clifford	2168	Head Coach	1	ckurtr74g1126380hsi40absdd	ckurtr4e3110680hsyay4lelz
ckurtr6te1023480hs6td6hw9o	2021-10-12 13:58:58.913	2021-10-14 08:00:00	Ty Corbin	2821	Assistant Coach	2	ckurtr74g1126380hsi40absdd	ckurtr4e5111380hsgp3ruczo
ckurtr6tj1024880hs6x001dnu	2021-10-12 13:58:58.922	2021-10-14 08:00:00	Pat Delany	204013	Assistant Coach	2	ckurtr74g1126380hsi40absdd	ckurtr4er117680hsugx5c549
ckurtr6qi990580hskh9ol9yx	2021-10-12 13:58:58.583	2021-10-14 08:00:00	Doc Rivers	1941	Head Coach	1	ckurtr74j1127080hss2acd21l	ckurtr4jb164580hs2ds80zcj
ckurtr6tq1026980hswt0tloul	2021-10-12 13:58:58.939	2021-10-14 08:00:00	Monty Williams	101273	Head Coach	1	ckurtr74l1127780hsxilzh94e	ckurtr4eg114180hs061eiroo
ckurtr6qk991280hsg2wsct8m	2021-10-12 13:58:58.599	2021-10-14 08:00:00	Brian Randle	1629427	Assistant Coach	2	ckurtr74l1127780hsxilzh94e	ckurtr4gw138680hsp48tv3hn
ckurtr6tu1028380hs31bffu8m	2021-10-12 13:58:58.952	2021-10-14 08:00:00	Dale Osbourne	203170	Assistant Coach	2	ckurtr74o1128480hsw91nsqm0	ckurtr4em116280hszu15pnn0
ckurtr6ts1027680hsmmpuckw8	2021-10-12 13:58:58.947	2021-10-14 08:00:00	Jannero Pargo	2457	Assistant Coach	2	ckurtr74o1128480hsw91nsqm0	ckurtr4ep116980hso67lq8pf
ckurtr6qu993380hsb4k6qsu1	2021-10-12 13:58:58.611	2021-10-14 08:00:00	Scott Brooks	2623	Assistant Coach	2	ckurtr74o1128480hsw91nsqm0	ckurtr4ik155480hs8p2npana
ckurtr6qw994080hs5kaavuav	2021-10-12 13:58:58.627	2021-10-14 08:00:00	Luke Walton	204012	Head Coach	1	ckurtr74q1129180hszuvk8s9g	ckurtr4he142880hspwy8ih6k
ckurtr6r0995480hs3qg905wc	2021-10-12 13:58:58.636	2021-10-14 08:00:00	Rex Kalamian	1672	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4hg143580hswritsekn
ckurtr6r3996180hsvhwwbvqz	2021-10-12 13:58:58.641	2021-10-14 08:00:00	Bobby Jackson	202985	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4kx182080hsdoubr21n
ckurtr6u01029780hsbeih40cy	2021-10-12 13:58:58.961	2021-10-14 08:00:00	Gregg Popovich	873	Head Coach	1	ckurtr74t1129880hsjudk6xi2	ckurtr4ex119080hsk16aazqg
ckurtr6r7997580hs6yft0z45	2021-10-12 13:58:58.653	2021-10-14 08:00:00	Mitch Johnson	1628188	Assistant Coach	2	ckurtr74t1129880hsjudk6xi2	ckurtr4hl144980hsvtuegr7m
ckurtr6r5996880hsuvkyy81i	2021-10-12 13:58:58.649	2021-10-14 08:00:00	Becky Hammon	204019	Assistant Coach	2	ckurtr74t1129880hsjudk6xi2	ckurtr4hn145680hsm53wz37y
ckurtr6u21030480hskvmxda1q	2021-10-12 13:58:58.965	2021-10-14 08:00:00	Will Sevening	1264	Trainer	3	ckurtr74t1129880hsjudk6xi2	ckurtr4ht147080hsyuvt5t47
ckurtr6u41031180hssmdrk9em	2021-10-12 13:58:58.969	2021-10-14 08:00:00	Nick Nurse	203606	Head Coach	1	ckurtr74v1130580hsggipc6wc	ckurtr4f2120480hshl6rzfkx
ckurtr6u71031880hs4i14qc4j	2021-10-12 13:58:58.973	2021-10-14 08:00:00	Jama Mahlalela	203604	Assistant Coach	2	ckurtr74v1130580hsggipc6wc	ckurtr4f4121180hsxmrqbyv7
ckurtr6r9998280hsaylyixao	2021-10-12 13:58:58.658	2021-10-14 08:00:00	Adrian Griffin	201878	Assistant Coach	2	ckurtr74v1130580hsggipc6wc	ckurtr4i0149180hsba4prx3q
ckurtr6rb998980hsq791jgtg	2021-10-12 13:58:58.662	2021-10-14 08:00:00	Dell Demps	725	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4i7151280hs37s3t4q9
ckurtr6ub1033280hsrd6y38co	2021-10-12 13:58:58.986	2021-10-14 08:00:00	Lamar Skeeter	1630281	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4ie153380hse0j5uy06
ckurtr6rk1001780hs534hlxs4	2021-10-12 13:58:58.704	2021-10-14 08:00:00	Robert Pack	202105	Assistant Coach	2	ckurtr7501131980hsxu0tclct	ckurtr4io156880hs4rh07fpo
ckurtr6ri1001080hsyl5tl3j4	2021-10-12 13:58:58.7	2021-10-14 08:00:00	Corey Gaines	200744	Assistant Coach	2	ckurtr7501131980hsxu0tclct	ckurtr4jx171580hs3epl3s4p
ckurtr6ro1003180hs5w3079tk	2021-10-12 13:58:58.713	2021-10-14 08:00:00	Jarell Christian	1627328	Assistant Coach	2	ckurtr7501131980hsxu0tclct	ckurtr4kr179980hsgx6l4ib2
ckurtr6uq1038180hs3byonlwn	2021-10-12 13:58:58.192	2021-10-14 08:00:00	John Dusel	1630017	Assistant Trainer	4	ckurtr71v1111680hso3ir0d8j	ckurtr4at076380hsc9jq6gda
ckurtr6vd1045180hsi42zibmf	2021-10-12 13:58:59.002	2021-10-14 08:00:00	Will Hardy	1628181	Assistant Coach	2	ckurtr72t1112380hs8x0kp6w2	ckurtr4hq146380hs2bf17bdf
ckurtr6x91066880hs5ww7rlt9	2021-10-12 13:58:58.46	2021-10-14 08:00:00	Scott Morrison	1627329	Assistant Coach	2	ckurtr72t1112380hs8x0kp6w2	ckurtr4jz172280hszvikzoei
ckurtr6uw1040280hs1m01p4f6	2021-10-12 13:58:58.456	2021-10-14 08:00:00	Ime Udoka	203152	Head Coach	1	ckurtr72t1112380hs8x0kp6w2	ckurtr4kd175780hsse7hinno
ckurtr6vf1045880hse8epik00	2021-10-12 13:58:59.011	2021-10-14 08:00:00	Brandon Bailey	1628807	Assistant Coach	2	ckurtr72t1112380hs8x0kp6w2	ckurtr4l7185580hsx2c9yvsh
ckurtr6vs1049380hswxf7b6nh	2021-10-12 13:58:59.093	2021-10-14 08:00:00	Jay Larranaga	203168	Assistant Coach	2	ckurtr72t1112380hs8x0kp6w2	ckurtr4lk189780hso9y9ggpo
ckurtr6us1038880hsodt238s2	2021-10-12 13:58:58.227	2021-10-14 08:00:00	Sebastien Poirier	203550	Trainer	3	ckurtr72y1113080hs005x0gxk	ckurtr44z027380hssyx9yoya
ckurtr6v81043780hs58a971x7	2021-10-12 13:58:58.726	2021-10-14 08:00:00	Royal Ivey	1628179	Assistant Coach	2	ckurtr72y1113080hs005x0gxk	ckurtr4fm126080hsqa2h71qe
ckurtr6xb1067580hslz4gudep	2021-10-12 13:58:58.464	2021-10-14 08:00:00	Ryan Forehan-Kelly	1628803	Assistant Coach	2	ckurtr72y1113080hs005x0gxk	ckurtr4k2172980hs6nscl1an
ckurtr6vk1047280hskzqhesly	2021-10-12 13:58:59.019	2021-10-14 08:00:00	David Vanterpool	203150	Assistant Coach	2	ckurtr72y1113080hs005x0gxk	ckurtr4m8198180hsxzkt4zpe
ckurtr6vi1046580hs1uuqpxge	2021-10-12 13:58:59.015	2021-10-14 08:00:00	Chad Iske	202602	Assistant Coach	2	ckurtr7311113780hsgrdqiegk	ckurtr4lm190480hs80uht7oj
ckurtr6ys1075980hspiqixaid	2021-10-12 13:58:59.033	2021-10-14 08:00:00	Maurice Cheeks	1312	Assistant Coach	2	ckurtr7341114480hs337eaj26	ckurtr4n0206580hsanhr0cde
ckurtr6x71066180hsy20getcq	2021-10-12 13:58:58.288	2021-10-14 08:00:00	Greg Buckner	203811	Assistant Coach	2	ckurtr7371115180hslnccru8a	ckurtr45w035080hsx4l8i8to
ckurtr6vm1047980hszftasw8b	2021-10-12 13:58:59.024	2021-10-14 08:00:00	Dan Geriot	1629110	Assistant Coach	2	ckurtr7371115180hslnccru8a	ckurtr4lo191180hs12p6vuwu
ckurtr6uh1035380hsgqsf3s4r	2021-10-12 13:58:59.007	2021-10-14 08:00:00	Darrell Armstrong	202599	Assistant Coach	2	ckurtr73a1115880hsxkdan1ud	ckurtr47t052580hsy1ruuixn
ckurtr6w01051480hslnwamhd9	2021-10-12 13:58:59.055	2021-10-14 08:00:00	Sidney Lowe	1226	Assistant Coach	2	ckurtr73f1117280hsgklsbom1	ckurtr4lq191880hs675846x7
ckurtr6xd1068280hs18qr9w4k	2021-10-12 13:58:58.505	2021-10-14 08:00:00	Jeff Hornacek	202898	Assistant Coach	2	ckurtr73k1118680hs60y14qgi	ckurtr4iy160380hswtmkirp4
ckurtr6w31052180hsjl6vmc18	2021-10-12 13:58:59.06	2021-10-14 08:00:00	Kaleb Canales	201696	Assistant Coach	2	ckurtr73n1119380hs6h18kxhb	ckurtr4ls192580hszqdw8vdr
ckurtr6yg1072480hsyj0batzr	2021-10-12 13:58:58.785	2021-10-14 08:00:00	Mike Penberthy	2130	Assistant Coach	2	ckurtr73t1120780hsfcm6d1g8	ckurtr4cq095280hsdp56vxic
ckurtr6vy1050780hs5f31rwfz	2021-10-12 13:58:59.05	2021-10-14 08:00:00	Sonia Raman	1630290	Assistant Coach	2	ckurtr73w1121480hs5q03bem0	ckurtr4cu096680hsd2qpgwer
ckurtr6yx1077380hsx0pqjlqk	2021-10-12 13:58:59.085	2021-10-14 08:00:00	Brad Jones	203797	Assistant Coach	2	ckurtr73w1121480hs5q03bem0	ckurtr4m0195380hsvvrrikfx
ckurtr6w91054280hs7c68g95s	2021-10-12 13:58:59.081	2021-10-14 08:00:00	Chris Quinn	204226	Assistant Coach	2	ckurtr73y1122180hs7mhd2u3c	ckurtr4fr127480hsf612ur20
ckurtr6xf1068980hshconqvci	2021-10-12 13:58:58.548	2021-10-14 08:00:00	Octavio De La Grana	201682	Assistant Coach for Player Development	12	ckurtr73y1122180hs7mhd2u3c	ckurtr4kt180680hswnudcv6y
ckurtr6yi1073180hslqafn1uh	2021-10-12 13:58:58.821	2021-10-14 08:00:00	Mike Budenholzer	1371	Head Coach	1	ckurtr7411122880hsbsw23one	ckurtr4ft128180hs9pk5wh7p
ckurtr6wb1054980hsmyrromlx	2021-10-12 13:58:59.089	2021-10-14 08:00:00	Bryan Gates	202109	Assistant Coach	2	ckurtr7441123580hswoadqvid	ckurtr4mh200980hso1qr2ccm
ckurtr6w71053580hsafodqiks	2021-10-12 13:58:59.073	2021-10-14 08:00:00	Rex Walters	777	Assistant Coach	2	ckurtr7471124280hshmkzngtt	ckurtr4dp105780hsuhpk30tg
ckurtr6wg1056380hsdgl97th0	2021-10-12 13:58:59.105	2021-10-14 08:00:00	Fred Vinson	201676	Assistant Coach	2	ckurtr7471124280hshmkzngtt	ckurtr4m2196080hsttjtv5wb
ckurtr6yk1073880hs0y07axsj	2021-10-12 13:58:58.881	2021-10-14 08:00:00	Johnnie Bryant	204008	Associate Head Coach	9	ckurtr74b1124980hs9jiumudw	ckurtr4gb132380hskb0r8nh5
ckurtr6wi1057080hsl0rltiy5	2021-10-12 13:58:59.113	2021-10-14 08:00:00	Vin Bhavnani	1628178	Assistant Coach	2	ckurtr74e1125680hs5fbtikqr	ckurtr4j5162480hshd8dkuxp
ckurtr6wm1058480hs7jh6ki4g	2021-10-12 13:58:59.126	2021-10-14 08:00:00	Dylan Murphy	1627336	Assistant Coach	2	ckurtr74g1126380hsi40absdd	ckurtr4gr137280hs4qhxmvt2
ckurtr6v31042380hsd07fu7a3	2021-10-12 13:58:58.595	2021-10-14 08:00:00	Brian Adams	1629169	Assistant Coach	2	ckurtr74j1127080hss2acd21l	ckurtr4gu137980hsk9tkcc7x
ckurtr6yn1074580hsxg4v9riw	2021-10-12 13:58:58.943	2021-10-14 08:00:00	Kevin Young	202111	Assistant Coach	2	ckurtr74l1127780hsxilzh94e	ckurtr4ei114880hsajnnmfp1
ckurtr6wk1057780hsct4q2fo8	2021-10-12 13:58:59.118	2021-10-14 08:00:00	Mark Bryant	101173	Assistant Coach	2	ckurtr74l1127780hsxilzh94e	ckurtr4mm202380hs69yfsz89
ckurtr6xg1069680hslrwvqy0c	2021-10-12 13:58:58.615	2021-10-14 08:00:00	Jim Moran	1627471	Assistant Coach	2	ckurtr74o1128480hsw91nsqm0	ckurtr4h8141480hsv3worx1s
ckurtr6wo1059180hs8djvxogw	2021-10-12 13:58:59.138	2021-10-14 08:00:00	Will Scott	1627331	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4m6197480hsyj5imsc3
ckurtr6yz1078080hs49u2zchb	2021-10-12 13:58:59.147	2021-10-14 08:00:00	Alvin Gentry	1243	Associate Head Coach	9	ckurtr74q1129180hszuvk8s9g	ckurtr4mo203080hsh2bsozic
ckurtr6wy1062680hsgvart1tb	2021-10-12 13:58:59.186	2021-10-14 08:00:00	Chip Engelland	2887	Assistant Coach	2	ckurtr74t1129880hsjudk6xi2	ckurtr4f0119780hsm34cb2it
ckurtr6yp1075280hsm6yflvdg	2021-10-12 13:58:58.977	2021-10-14 08:00:00	Sergio Scariolo	1629144	Assistant Coach	2	ckurtr74v1130580hsggipc6wc	ckurtr4hw147780hsofti50e3
ckurtr6x21064080hssgwhc41f	2021-10-12 13:58:59.194	2021-10-14 08:00:00	Fab Flournoy	1629761	Assistant Coach	2	ckurtr74v1130580hsggipc6wc	ckurtr4hy148480hsjv1cjc20
ckurtr6x01063380hslrqcdiwl	2021-10-12 13:58:59.19	2021-10-14 08:00:00	Jeff Watkinson	1626233	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4l0182780hsob99cmtb
ckurtr6wq1059880hso1vfj5dt	2021-10-12 13:58:59.16	2021-10-14 08:00:00	Quin Snyder	202439	Head Coach	1	ckurtr74y1131280hsgn5id1b7	ckurtr4mx205880hs09tvr25t
ckurtr6x31064780hsz1s2l3h5	2021-10-12 13:58:59.198	2021-10-14 08:00:00	Mike Terpstra	203601	Assistant Coach	2	ckurtr7501131980hsxu0tclct	ckurtr4l1183480hserk60kpv
ckurtr6ww1061980hs7q11npnt	2021-10-12 13:58:59.182	2021-10-14 08:00:00	David Atkins	1630364	Assistant Coach	2	ckurtr7501131980hsxu0tclct	ckurtr4l5184880hsuy5vddlk
ckurtr6uf1034680hs0w58uxkd	2021-10-12 13:58:58.998	2021-10-14 08:00:00	Steve Nash	959	Head Coach	1	ckurtr72y1113080hs005x0gxk	ckurtr44j023880hssd8vei1j
ckurtr6mf945080hsur8dmadj	2021-10-12 13:58:58.223	2021-10-14 08:00:00	Tiago Splitter	201168	Assistant Coach for Player Development	12	ckurtr72y1113080hs005x0gxk	ckurtr44w026680hsvrpg11fq
ckurtr6mu949980hs4xpylw78	2021-10-12 13:58:58.258	2021-10-14 08:00:00	John Bryant	202743	Assistant Coach	2	ckurtr7341114480hs337eaj26	ckurtr45n032980hszmd920px
ckurtr6n7953480hsvvprqcr8	2021-10-12 13:58:58.295	2021-10-14 08:00:00	Casey Smith	2868	Trainer	3	ckurtr73a1115880hsxkdan1ud	ckurtr481054680hshjkuqsp8
ckurtr6yu1076680hstwq6treu	2021-10-12 13:58:59.042	2021-10-14 08:00:00	Jason Kidd	203456	Head Coach	1	ckurtr73a1115880hsxkdan1ud	ckurtr4a9070080hsjy4hzs65
ckurtr6z61080180hstzchvd8g	2021-10-12 13:58:58.315	2021-10-14 08:00:00	Jordi Fernandez	203759	Assistant Coach	2	ckurtr73c1116580hs3i36jjw5	ckurtr48c057480hs7bh2wuxb
ckurtr6za1081580hs49fmyx2p	2021-10-12 13:58:58.319	2021-10-14 08:00:00	David Adelman	203600	Assistant Coach	2	ckurtr73c1116580hs3i36jjw5	ckurtr4bl084780hsdpue1mt7
ckurtr6nr959080hs5beeelti	2021-10-12 13:58:58.333	2021-10-14 08:00:00	Tim Hardaway	204230	Assistant Coach	2	ckurtr73f1117280hsgklsbom1	ckurtr48h058880hsyivk5onb
ckurtr6nw960480hs8drsoyz8	2021-10-12 13:58:58.346	2021-10-14 08:00:00	Bruce Fraser	204260	Assistant Coach	2	ckurtr73h1117980hsrqsjw8xn	ckurtr491061680hseh3fdg25
ckurtr6zm1085080hs8r10t7vc	2021-10-12 13:58:58.493	2021-10-14 08:00:00	Kenny Atkinson	201690	Assistant Coach	2	ckurtr73h1117980hsrqsjw8xn	ckurtr4ki177180hsmu7xrr12
ckurtr7101102580hss8p2t0vl	2021-10-12 13:58:59.064	2021-10-14 08:00:00	Stephen Silas	2152	Head Coach	1	ckurtr73k1118680hs60y14qgi	ckurtr49h063080hs5ljd6rts
ckurtr6zj1084380hsfweuq18t	2021-10-12 13:58:58.509	2021-10-14 08:00:00	Jason Biles	202431	Trainer	3	ckurtr73k1118680hs60y14qgi	ckurtr4k8174380hs08sc5yo8
ckurtr7121103280hsce8yco8y	2021-10-12 13:58:59.077	2021-10-14 08:00:00	Ronald Nored	203753	Assistant Coach	2	ckurtr73n1119380hs6h18kxhb	ckurtr455028780hsffcjfa9x
ckurtr6z41079480hskzxavbd5	2021-10-12 13:58:58.375	2021-10-14 08:00:00	Mike Weinar	1628782	Assistant Coach	2	ckurtr73n1119380hs6h18kxhb	ckurtr47w053280hsssvkaxqb
ckurtr70g1095580hsxc3k6fyr	2021-10-12 13:58:58.777	2021-10-14 08:00:00	Jeremy Castleberry	1630361	Assistant Coach	2	ckurtr73q1120080hsuk9pz8mb	ckurtr4cc091080hswawts9or
ckurtr70e1094880hsgac34kuk	2021-10-12 13:58:58.768	2021-10-14 08:00:00	Roy Rogers	201689	Assistant Coach	2	ckurtr73q1120080hsuk9pz8mb	ckurtr4ce091780hsu6qkk8vt
ckurtr70c1094180hs233n8hs7	2021-10-12 13:58:58.763	2021-10-14 08:00:00	Brendan O'Connor	2814	Assistant Coach	2	ckurtr73q1120080hsuk9pz8mb	ckurtr4cj093180hsy8k7gyde
ckurtr6rs1004580hsvd702iig	2021-10-12 13:58:58.388	2021-10-14 08:00:00	Lionel Hollins	1353	Assistant Coach	2	ckurtr73t1120780hsfcm6d1g8	ckurtr4a7069380hsd0xfg47a
ckurtr6of966780hsp35un152	2021-10-12 13:58:58.404	2021-10-14 08:00:00	Erik Spoelstra	1787	Head Coach	1	ckurtr73y1122180hs7mhd2u3c	ckurtr4ai072880hserb5v309
ckurtr70l1097680hswn2b2axx	2021-10-12 13:58:58.838	2021-10-14 08:00:00	Ben Sullivan	204224	Assistant Coach	2	ckurtr7411122880hsbsw23one	ckurtr4d9100880hsivapls7p
ckurtr70n1098380hskz2ptal2	2021-10-12 13:58:58.843	2021-10-14 08:00:00	Charles Lee	204225	Assistant Coach	2	ckurtr7411122880hsbsw23one	ckurtr4db101580hsah885830
ckurtr70k1096980hspqmn8ivi	2021-10-12 13:58:58.834	2021-10-14 08:00:00	Darvin Ham	203005	Assistant Coach	2	ckurtr7411122880hsbsw23one	ckurtr4fw128880hskd21ryfo
ckurtr70p1099080hslc25olx4	2021-10-12 13:58:58.847	2021-10-14 08:00:00	Scott Faust	201692	Trainer	3	ckurtr7411122880hsbsw23one	ckurtr4fz129580hsaaf8f4zk
ckurtr7151103980hs5qc9m70m	2021-10-12 13:58:59.101	2021-10-14 08:00:00	Chris Finch	202896	Head Coach	1	ckurtr7441123580hswoadqvid	ckurtr4mj201680hs4cwtham2
ckurtr6zo1085780hs0j7whvsp	2021-10-12 13:58:58.566	2021-10-14 08:00:00	Casey Hill	203243	Assistant Coach	2	ckurtr7471124280hshmkzngtt	ckurtr4j2161780hseiv21pwx
ckurtr70a1093480hsc5jbjrp4	2021-10-12 13:58:58.893	2021-10-14 08:00:00	Andy Greer	2519	Assistant Coach	2	ckurtr74b1124980hs9jiumudw	ckurtr4dx108580hsszy5eyz5
ckurtr70t1100480hsgwkd3xqf	2021-10-12 13:58:58.905	2021-10-14 08:00:00	Anthony Goenaga	101269	Trainer	3	ckurtr74b1124980hs9jiumudw	ckurtr4dz109280hs4zfxlu49
ckurtr7071092080hst5qwlzfx	2021-10-12 13:58:58.897	2021-10-14 08:00:00	Darren Erman	203375	Assistant Coach	2	ckurtr74b1124980hs9jiumudw	ckurtr4gd133080hsm563mv69
ckurtr6om968880hs8wju3miy	2021-10-12 13:58:58.416	2021-10-14 08:00:00	David Akinyooye	202859	Assistant Coach	2	ckurtr74e1125680hs5fbtikqr	ckurtr4ar075680hsbn96p5ri
ckurtr71c1106080hsplkzfems	2021-10-12 13:58:59.13	2021-10-14 08:00:00	Kameron Woods	1627380	Assistant Coach for Player Development	12	ckurtr74e1125680hs5fbtikqr	ckurtr4gi134480hsxdzbuarh
ckurtr71a1105380hssnyv8eax	2021-10-12 13:58:59.122	2021-10-14 08:00:00	Mike Miller	203758	Assistant Coach	2	ckurtr74e1125680hs5fbtikqr	ckurtr4lu193280hsvqepy0cr
ckurtr71p1110280hstcxdi63v	2021-10-12 13:58:59.151	2021-10-14 08:00:00	Kevin Johnson	1360	Trainer	3	ckurtr74j1127080hss2acd21l	ckurtr4ed113480hslu87lixv
ckurtr71n1109580hsby4q0jc2	2021-10-12 13:58:59.143	2021-10-14 08:00:00	Dan Burke	2515	Assistant Coach	2	ckurtr74j1127080hss2acd21l	ckurtr4m4196780hsj7wnbn9s
ckurtr6zw1088580hs1lgdrj7a	2021-10-12 13:58:58.619	2021-10-14 08:00:00	John McCullough	1628240	Assistant Coach	2	ckurtr74o1128480hsw91nsqm0	ckurtr4h5140780hs0girkuyj
ckurtr6zq1086480hs011o6x35	2021-10-12 13:58:58.623	2021-10-14 08:00:00	Geoff Clark	101272	Trainer	3	ckurtr74o1128480hsw91nsqm0	ckurtr4hb142180hss2felmak
ckurtr71f1106780hs48p163q5	2021-10-12 13:58:59.155	2021-10-14 08:00:00	Jonah Herscu	1627564	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4az078480hstqnn7zrn
ckurtr7011089980hske7ofb16	2021-10-12 13:58:58.645	2021-10-14 08:00:00	Roy Rana	1629711	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4ir157580hsjm0txip6
ckurtr6zy1089280hsv7q4sijl	2021-10-12 13:58:58.687	2021-10-14 08:00:00	Sergi Oliva	1630282	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4i2149880hsei6d840z
ckurtr7051091380hsdoffvz70	2021-10-12 13:58:58.683	2021-10-14 08:00:00	Vince Legarza	1630280	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4ib152680hsn7xir99n
ckurtr7081092780hsjm2vuqhg	2021-10-12 13:58:58.691	2021-10-14 08:00:00	Brian Zettler	101277	Trainer	3	ckurtr74y1131280hsgn5id1b7	ckurtr4ii154780hsjmwve7lb
ckurtr6zh1083680hswar8xpbe	2021-10-12 13:58:58.679	2021-10-14 08:00:00	Bryan Bailey	1628216	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4js170180hss3hec0n0
ckurtr6z11078780hsvwflso66	2021-10-12 13:58:59.206	2021-10-14 08:00:00	Dean Oliver	1630363	Assistant Coach	2	ckurtr7501131980hsxu0tclct	ckurtr4l3184180hsg2zzhdxg
ckurtr6uj1036080hszglih9hb	2021-10-12 13:58:58.176	2021-10-14 08:00:00	Melvin Hunt	2384	Assistant Coach	2	ckurtr71v1111680hso3ir0d8j	ckurtr4b1079180hsm7mgojwt
ckurtr6ul1036780hsk7tpqpwr	2021-10-12 13:58:58.183	2021-10-14 08:00:00	Matt Hill	1628770	Assistant Coach	2	ckurtr71v1111680hso3ir0d8j	ckurtr4b4079880hs8ee69ez2
ckurtr6uo1037480hsabkryl8l	2021-10-12 13:58:58.187	2021-10-14 08:00:00	Scottie Parker	1628764	Trainer	3	ckurtr71v1111680hso3ir0d8j	ckurtr4b6080580hsb91ud7or
ckurtr6vb1044480hspk87v8mm	2021-10-12 13:58:58.994	2021-10-14 08:00:00	Nate McMillan	1778	Head Coach	1	ckurtr71v1111680hso3ir0d8j	ckurtr4f9122580hsu4uuszq9
ckurtr6v51043080hs5dd457k2	2021-10-12 13:58:58.717	2021-10-14 08:00:00	Chris Jent	2607	Assistant Coach	2	ckurtr71v1111680hso3ir0d8j	ckurtr4fb123280hsywcpti3t
ckurtr6uu1039580hsjno78a7g	2021-10-12 13:58:58.451	2021-10-14 08:00:00	Marlon Garnett	1831	Assistant Coach	2	ckurtr71v1111680hso3ir0d8j	ckurtr4jd165280hsm9ajwlxi
ckurtr6ox972380hsfuvsb8mz	2021-10-12 13:58:58.429	2021-10-14 08:00:00	Brad Stevens	203535	Head Coach	1	ckurtr72t1112380hs8x0kp6w2	ckurtr4b8081280hsi2asp8ez
ckurtr71r1110980hsbrbvbygz	2021-10-12 13:58:58.446	2021-10-14 08:00:00	Jamie Young	202979	Assistant Coach	2	ckurtr72t1112380hs8x0kp6w2	ckurtr444021080hskvbkw66h
ckurtr6m4941580hsncuecok7	2021-10-12 13:58:58.201	2021-10-14 08:00:00	Jerome Allen	1627590	Assistant Coach	2	ckurtr72t1112380hs8x0kp6w2	ckurtr449021780hs5js82r1y
ckurtr6p0973080hswt64ujua	2021-10-12 13:58:58.197	2021-10-14 08:00:00	Joe Mazzulla	1628210	Assistant Coach	2	ckurtr72t1112380hs8x0kp6w2	ckurtr44c022480hsngcjb81z
ckurtr6mb943680hsrzqqeoq4	2021-10-12 13:58:58.214	2021-10-14 08:00:00	Adam Harrington	1627876	Assistant Coach	2	ckurtr72y1113080hs005x0gxk	ckurtr44p025280hslckh93g4
ckurtr6md944380hs115z9xjj	2021-10-12 13:58:58.218	2021-10-14 08:00:00	Jordan Ott	1627877	Assistant Coach	2	ckurtr72y1113080hs005x0gxk	ckurtr44t025980hsye93r156
ckurtr6xk1071080hs3j5gn8ms	2021-10-12 13:58:58.722	2021-10-14 08:00:00	Jacque Vaughn	202588	Lead Assistant Coach	13	ckurtr72y1113080hs005x0gxk	ckurtr4fd123980hs6djsssqz
ckurtr6ud1033980hsxikfc5qf	2021-10-12 13:58:58.99	2021-10-14 08:00:00	Dan Liburd	1629412	Strength and Conditioning Coach	5	ckurtr72y1113080hs005x0gxk	ckurtr4l9186280hsg08ujdpf
ckurtr6mp948580hswlzjrzwk	2021-10-12 13:58:58.254	2021-10-14 08:00:00	Mike Wilhelm	2511	Assistant Coach	2	ckurtr7341114480hs337eaj26	ckurtr45k032280hseljg50gj
ckurtr6p2973780hs80qk8prm	2021-10-12 13:58:58.25	2021-10-14 08:00:00	Pete Myers	2394	Assistant Coach	2	ckurtr7341114480hs337eaj26	ckurtr45q033680hs3a52ms2a
ckurtr6p9976580hs7vxvpxts	2021-10-12 13:58:58.468	2021-10-14 08:00:00	Stephen Spiro	204286	Trainer	3	ckurtr7371115180hslnccru8a	ckurtr4lb186980hsx9hge55u
ckurtr6nh956280hskx4z72ug	2021-10-12 13:58:58.307	2021-10-14 08:00:00	Bob Weiss	203165	Assistant Coach	2	ckurtr73c1116580hs3i36jjw5	ckurtr4bi084080hs768q42rv
ckurtr6z81080880hsesg6fj2o	2021-10-12 13:58:58.496	2021-10-14 08:00:00	Drew Yoder	1628227	Trainer	3	ckurtr73h1117980hsrqsjw8xn	ckurtr4bx087580hspjz3gisg
ckurtr6vo1048680hspzu2y7dz	2021-10-12 13:58:59.028	2021-10-14 08:00:00	Will Weaver	1627657	Assistant Coach	2	ckurtr73k1118680hs60y14qgi	ckurtr4c4088980hseugynns2
ckurtr6zs1087180hs63euo5oi	2021-10-12 13:58:58.522	2021-10-14 08:00:00	Jenny Boucek	100616	Assistant Coach	2	ckurtr73n1119380hs6h18kxhb	ckurtr4jh166680hsjb79um2q
ckurtr6w51052880hsorscfnay	2021-10-12 13:58:59.068	2021-10-14 08:00:00	Dan Craig	203599	Associate Head Coach	9	ckurtr73q1120080hsuk9pz8mb	ckurtr4ly194680hs5o6mjk6r
ckurtr6pu983580hsemwajtao	2021-10-12 13:58:58.53	2021-10-14 08:00:00	Miles Simon	1628472	Assistant Coach	2	ckurtr73t1120780hsfcm6d1g8	ckurtr4lh189080hs6kh40lbt
ckurtr6s91010880hs8770ne0g	2021-10-12 13:58:58.793	2021-10-14 08:00:00	Nina Hsieh	201766	Trainer	3	ckurtr73t1120780hsfcm6d1g8	ckurtr4cs095980hsyaeciq0m
ckurtr70i1096280hspmbcbbqc	2021-10-12 13:58:58.83	2021-10-14 08:00:00	Chad Forcier	2649	Assistant Coach	2	ckurtr7411122880hsbsw23one	ckurtr4d7100180hs2swtdbdk
ckurtr6t01019280hsubiuepor	2021-10-12 13:58:58.873	2021-10-14 08:00:00	Todd Campbell	1629432	Assistant Trainer	4	ckurtr7471124280hshmkzngtt	ckurtr4g6130980hsm72vnqor
ckurtr7171104680hs0ql924i7	2021-10-12 13:58:59.109	2021-10-14 08:00:00	Willie Green	1628228	Head Coach	1	ckurtr7471124280hshmkzngtt	ckurtr4ma198880hsipkvu7xr
ckurtr6t51020680hst7m6xb7s	2021-10-12 13:58:58.885	2021-10-14 08:00:00	Kenny Payne	1630161	Lead Assistant Coach	13	ckurtr74b1124980hs9jiumudw	ckurtr4dt107180hs333p5t64
ckurtr70r1099780hsfih8lhmm	2021-10-12 13:58:58.901	2021-10-14 08:00:00	Larry Greer	1629450	Assistant Coach	2	ckurtr74b1124980hs9jiumudw	ckurtr4gg133780hsyqa9plsq
ckurtr6wd1055680hsdmf9i7fv	2021-10-12 13:58:59.097	2021-10-14 08:00:00	Zach Peterson	1630455	Assistant Coach for Player Development	12	ckurtr74e1125680hs5fbtikqr	ckurtr4gk135180hs11dd0cht
ckurtr6ru1005280hs4ah1fvzm	2021-10-12 13:58:58.424	2021-10-14 08:00:00	Jamahl Mosley	202427	Head Coach	1	ckurtr74g1126380hsi40absdd	ckurtr4bf083380hs48g3t75j
ckurtr71l1108880hs41ceycl8	2021-10-12 13:58:59.134	2021-10-14 08:00:00	Sam Cassell	202108	Assistant Coach	2	ckurtr74j1127080hss2acd21l	ckurtr4ko179280hs5i115e8g
ckurtr6uz1040980hspn8gk0uz	2021-10-12 13:58:58.587	2021-10-14 08:00:00	David Joerger	201220	Assistant Coach	2	ckurtr74j1127080hss2acd21l	ckurtr4kv181380hss78vt7rl
ckurtr6qp991980hsf3xirphm	2021-10-12 13:58:58.603	2021-10-14 08:00:00	David Crewe	1629410	Trainer	3	ckurtr74l1127780hsxilzh94e	ckurtr4gz139380hs8k5ccf0o
ckurtr6yc1071780hsydhw9i0l	2021-10-12 13:58:58.813	2021-10-14 08:00:00	Terry Stotts	1337	Head Coach	1	ckurtr74o1128480hsw91nsqm0	ckurtr4ek115580hskd0j1mlp
ckurtr6qs992680hsvzlec2sa	2021-10-12 13:58:58.607	2021-10-14 08:00:00	Chauncey Billups	1497	Head Coach	1	ckurtr74o1128480hsw91nsqm0	ckurtr4lf188380hssqwltrkl
ckurtr71j1108180hs6k7rnnjv	2021-10-12 13:58:59.174	2021-10-14 08:00:00	Rico Hines	1627971	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4md199580hshgh7khcw
ckurtr71h1107480hsy4vwcpa6	2021-10-12 13:58:59.165	2021-10-14 08:00:00	Jesse Mermuys	203605	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4mq203780hsixh596ao
ckurtr6u91032580hs54pha331	2021-10-12 13:58:58.981	2021-10-14 08:00:00	Scott McCullough	1356	Trainer	3	ckurtr74v1130580hsggipc6wc	ckurtr4f6121880hszymbyh6q
ckurtr6wu1061280hssicslstv	2021-10-12 13:58:59.178	2021-10-14 08:00:00	Jon Goodwillie	1629821	Assistant Coach	2	ckurtr74v1130580hsggipc6wc	ckurtr4mv205180hsymldnuzi
ckurtr6rd999680hs47m3xh3a	2021-10-12 13:58:58.671	2021-10-14 08:00:00	Keyon Dooling	2039	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4i5150580hs9pfeoayi
ckurtr6xi1070380hswx63pkud	2021-10-12 13:58:58.667	2021-10-14 08:00:00	Mike Wells	1997	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4ig154080hsrf7p3shz
ckurtr6rm1002480hss1169fe0	2021-10-12 13:58:58.708	2021-10-14 08:00:00	Mike Longabardi	201665	Assistant Coach	2	ckurtr7501131980hsxu0tclct	ckurtr4im156180hsqhv3hx45
ckurtr6rf1000380hs37s2osr1	2021-10-12 13:58:58.695	2021-10-14 08:00:00	Tony Brown	1655	Associate Head Coach	9	ckurtr7501131980hsxu0tclct	ckurtr4ju170880hsbsathrrg
ckurtr6pb977280hsr46t1az3	2021-10-12 13:58:58.472	2021-10-14 08:00:00	Jenny Coucek	1630496	Assistant Coach	2	ckurtr73a1115880hsxkdan1ud	ckurtr4it158280hs864tlqt3
ckurtr6pd977980hsitz6qsm0	2021-10-12 13:58:58.477	2021-10-14 08:00:00	Charles Klask	202894	Assistant Coach	2	ckurtr73c1116580hs3i36jjw5	ckurtr4k5173680hsco0b97j9
ckurtr70y1101880hsbykqvnqe	2021-10-12 13:58:59.037	2021-10-14 08:00:00	John Beckett	1630491	Assistant Coach	2	ckurtr73c1116580hs3i36jjw5	ckurtr4lw193980hswt0r8hlr
ckurtr6vv1050080hs9wkbn2th	2021-10-12 13:58:59.046	2021-10-14 08:00:00	Chris DeMarco	1627666	Assistant Coach for Player Development	12	ckurtr73h1117980hsrqsjw8xn	ckurtr4jp169480hsd26k76wb
ckurtr6pl980780hs3oilgtqv	2021-10-12 13:58:58.501	2021-10-14 08:00:00	DeSagana Diop	2205	Assistant Coach	2	ckurtr73k1118680hs60y14qgi	ckurtr4c1088280hsp3n1uvmt
ckurtr6s11008080hso7pkn72b	2021-10-12 13:58:58.749	2021-10-14 08:00:00	Calbert Cheaney	384	Assistant Coach	2	ckurtr73n1119380hs6h18kxhb	ckurtr4c7089680hshfdijlav
ckurtr6nc954880hsb64z73qa	2021-10-12 13:58:58.262	2021-10-14 08:00:00	Nate Bjorkgren	201765	Head Coach	1	ckurtr73n1119380hs6h18kxhb	ckurtr49u065880hs3o9w41y4
ckurtr6zf1082980hszzl9o6mt	2021-10-12 13:58:58.371	2021-10-14 08:00:00	Tyler Marsh	203764	Assistant Coach	2	ckurtr73n1119380hs6h18kxhb	ckurtr4a0067280hsort36wjt
ckurtr6zc1082280hso6kb1gk5	2021-10-12 13:58:58.379	2021-10-14 08:00:00	Josh Corbeil	101200	Trainer	3	ckurtr73n1119380hs6h18kxhb	ckurtr4a2067980hssbcq9h32
ckurtr7031090680hs9nvkvuys	2021-10-12 13:58:58.753	2021-10-14 08:00:00	Carl Eaton	201675	Assistant Trainer	4	ckurtr73n1119380hs6h18kxhb	ckurtr4c9090380hs1ekg5v9h
ckurtr6s51009480hsuv6n058a	2021-10-12 13:58:58.781	2021-10-14 08:00:00	Jasen Powell	2010	Trainer	3	ckurtr73q1120080hsuk9pz8mb	ckurtr4cl093880hsvey5wqur
ckurtr6pz984980hsro86241q	2021-10-12 13:58:58.539	2021-10-14 08:00:00	Blake Ahearn	201336	Assistant Coach	2	ckurtr73w1121480hs5q03bem0	ckurtr4jj167380hsjye3sjnk
ckurtr6sb1011580hs2rhare1m	2021-10-12 13:58:58.798	2021-10-14 08:00:00	Scoonie Penn	2086	Assistant Coach	2	ckurtr73w1121480hs5q03bem0	ckurtr4fp126780hs83gix2wr
ckurtr6q1985680hs0zxhdwip	2021-10-12 13:58:58.544	2021-10-14 08:00:00	Caron Butler	2406	Assistant Coach	2	ckurtr73y1122180hs7mhd2u3c	ckurtr4jl168080hso45hn6ah
ckurtr6so1015780hsjamfmdok	2021-10-12 13:58:58.825	2021-10-14 08:00:00	Vin Baker	452	Assistant Coach	2	ckurtr7411122880hsbsw23one	ckurtr4dd102280hs8ttq34lg
ckurtr6sr1016480hs14htb9x3	2021-10-12 13:58:58.852	2021-10-14 08:00:00	Pablo Prigioni	203143	Assistant Coach	2	ckurtr7441123580hswoadqvid	ckurtr4g2130280hsixbaey2y
ckurtr6qd989180hsec7n470s	2021-10-12 13:58:58.575	2021-10-14 08:00:00	Donnie Strack	1629423	Trainer	3	ckurtr74e1125680hs5fbtikqr	ckurtr4j9163880hshbna1mga
ckurtr6tn1026280hs1y4hc2w1	2021-10-12 13:58:58.93	2021-10-14 08:00:00	Mike Batiste	1627341	Assistant Coach	2	ckurtr74g1126380hsi40absdd	ckurtr4gn135880hstdvn0vvf
ckurtr6tl1025580hs0x96isf5	2021-10-12 13:58:58.926	2021-10-14 08:00:00	Bruce Kreutzer	1627164	Assistant Coach	2	ckurtr74g1126380hsi40absdd	ckurtr4gp136580hsvpkd0tfr
ckurtr6qf989880hsr1zyw0o3	2021-10-12 13:58:58.579	2021-10-14 08:00:00	Nate Tibbetts	202891	Assistant Coach	2	ckurtr74g1126380hsi40absdd	ckurtr4h1140080hsb9p8a38f
ckurtr6th1024180hsd46qqi9n	2021-10-12 13:58:58.917	2021-10-14 08:00:00	Steve Hetzel	204004	Assistant Coach	2	ckurtr74g1126380hsi40absdd	ckurtr4e8112080hsitnk2t73
ckurtr70w1101180hsi4n1j7uw	2021-10-12 13:58:58.934	2021-10-14 08:00:00	Ernest Eugene	2720	Trainer	3	ckurtr74g1126380hsi40absdd	ckurtr4ea112780hsotym0z8o
ckurtr6v11041680hss2t46cp4	2021-10-12 13:58:58.591	2021-10-14 08:00:00	Popeye Jones	202434	Assistant Coach	2	ckurtr74j1127080hss2acd21l	ckurtr4jn168780hswquq322s
ckurtr6zu1087880hsjisso6t4	2021-10-12 13:58:58.675	2021-10-14 08:00:00	Alex Jensen	204007	Assistant Coach	2	ckurtr74y1131280hsgn5id1b7	ckurtr4i9151980hso3v4sy34
ckurtr6x51065480hsu7jgdz3k	2021-10-12 13:58:59.202	2021-10-14 08:00:00	Eric Waters	101203	Trainer	3	ckurtr74y1131280hsgn5id1b7	ckurtr4me200280hsdld809f1
ckurtr6tx1029080hsndnodo2w	2021-10-12 13:58:58.957	2021-10-14 08:00:00	Joe Resendez	203167	Trainer	3	ckurtr74q1129180hszuvk8s9g	ckurtr4eu118380hsantghwry
ckurtr6qy994780hssl4odo0d	2021-10-12 13:58:58.632	2021-10-14 08:00:00	Stacey Augmon	278	Assistant Coach	2	ckurtr74q1129180hszuvk8s9g	ckurtr4hi144280hsnb18tal5
ckurtr6ws1060580hstd6t9sx7	2021-10-12 13:58:59.169	2021-10-14 08:00:00	Darius Songaila	2443	Assistant Coach	2	ckurtr74t1129880hsjudk6xi2	ckurtr4mt204480hshf9d4oot
\.


--
-- Data for Name: ColorScheme; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ColorScheme" (id, "createdAt", "updatedAt", "primary", secondary) FROM stdin;
ckurtr416000080hs6tsvxzrc	2021-10-12 13:58:54.524	2021-10-14 08:00:00	#002D62	#FDBB30
ckurtr41g000780hsc5swo8z3	2021-10-12 13:58:54.563	2021-10-14 08:00:00	#0C2340	#236192
ckurtr41l001480hs8ch24n54	2021-10-12 13:58:54.565	2021-10-14 08:00:00	#CE1141	#000000
ckurtr41p002180hsgfg9ncnk	2021-10-12 13:58:54.567	2021-10-14 08:00:00	#CE1141	#000000
ckurtr41s002880hsd4nx916c	2021-10-12 13:58:54.568	2021-10-14 08:00:00	#C4CED4	#000000
ckurtr41w003580hsdpmvllkm	2021-10-12 13:58:54.57	2021-10-14 08:00:00	#5A2D81	#63727A
ckurtr420004280hsy911nloa	2021-10-12 13:58:54.571	2021-10-14 08:00:00	#002B5C	#F9A01B
ckurtr423004980hsc6mjyfwq	2021-10-12 13:58:54.573	2021-10-14 08:00:00	#98002E	#000000
ckurtr427005680hsn81hfsru	2021-10-12 13:58:54.574	2021-10-14 08:00:00	#E03A3E	#000000
ckurtr42b006380hscrs8hy14	2021-10-12 13:58:54.575	2021-10-14 08:00:00	#1D1160	#E56020
ckurtr42e007080hsbpqlckuu	2021-10-12 13:58:54.576	2021-10-14 08:00:00	#5D76A9	#12173F
ckurtr42h007780hs9h2g54sd	2021-10-12 13:58:54.578	2021-10-14 08:00:00	#00471B	#EEE1C6
ckurtr42l008480hs6a1cjcdw	2021-10-12 13:58:54.579	2021-10-14 08:00:00	#007AC1	#EF3B24
ckurtr42o009180hsl0i4cmp9	2021-10-12 13:58:54.58	2021-10-14 08:00:00	#006BB6	#D50032
ckurtr42r009880hsy9g5f2ns	2021-10-12 13:58:54.582	2021-10-14 08:00:00	#006BB6	#F58426
ckurtr42u010580hsgqan9ovh	2021-10-12 13:58:54.583	2021-10-14 08:00:00	#0C2340	#C8102E
ckurtr42w011280hsqsb5pd61	2021-10-12 13:58:54.585	2021-10-14 08:00:00	#C8102E	#1D428A
ckurtr430011980hs1mg9ep6d	2021-10-12 13:58:54.586	2021-10-14 08:00:00	#552583	#FDB927
ckurtr433012680hssxv2vkz5	2021-10-12 13:58:54.587	2021-10-14 08:00:00	#0077C0	#C4CED4
ckurtr436013380hsnpirsydy	2021-10-12 13:58:54.588	2021-10-14 08:00:00	#1D428A	#FFC72C
ckurtr438014080hsqm7g01ul	2021-10-12 13:58:54.59	2021-10-14 08:00:00	#0E2240	#FEC524
ckurtr43b014780hs4yb4xem7	2021-10-12 13:58:54.591	2021-10-14 08:00:00	#C8102E	#1D42BA
ckurtr43e015480hskkejnats	2021-10-12 13:58:54.592	2021-10-14 08:00:00	#CE1141	#000000
ckurtr43h016180hsbx2nthap	2021-10-12 13:58:54.593	2021-10-14 08:00:00	#00538C	#B8C4CA
ckurtr43l016880hs2acvmetu	2021-10-12 13:58:54.594	2021-10-14 08:00:00	#000000	#FFFFFF
ckurtr43o017580hsdv34glfo	2021-10-12 13:58:54.596	2021-10-14 08:00:00	#E03A3E	#C1D32F
ckurtr43q018280hsnfgb317a	2021-10-12 13:58:54.597	2021-10-14 08:00:00	#007A33	#BA9653
ckurtr43t018980hsin84vvjl	2021-10-12 13:58:54.598	2021-10-14 08:00:00	#860038	#041E42
ckurtr43w019680hs9ko1e4a5	2021-10-12 13:58:54.599	2021-10-14 08:00:00	#1D1160	#00788C
ckurtr440020380hsytkobos7	2021-10-12 13:58:54.6	2021-10-14 08:00:00	#002B5C	#E31837
\.


--
-- Data for Name: Image; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Image" (id, "createdAt", "updatedAt", url, type, player, team) FROM stdin;
ckurtr444021080hskvbkw66h	2021-10-12 13:58:54.656	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202979.png	HEADSHOT	\N	\N
ckurtr449021780hs5js82r1y	2021-10-12 13:58:54.657	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627590.png	HEADSHOT	\N	\N
ckurtr44c022480hsngcjb81z	2021-10-12 13:58:54.659	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628210.png	HEADSHOT	\N	\N
ckurtr44f023180hs9y5a2fwf	2021-10-12 13:58:54.66	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628765.png	HEADSHOT	\N	\N
ckurtr44j023880hssd8vei1j	2021-10-12 13:58:54.662	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/959.png	HEADSHOT	\N	\N
ckurtr44m024580hsqerb0muc	2021-10-12 13:58:54.664	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1783.png	HEADSHOT	\N	\N
ckurtr44p025280hslckh93g4	2021-10-12 13:58:54.665	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627876.png	HEADSHOT	\N	\N
ckurtr44t025980hsye93r156	2021-10-12 13:58:54.667	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627877.png	HEADSHOT	\N	\N
ckurtr44w026680hsvrpg11fq	2021-10-12 13:58:54.669	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201168.png	HEADSHOT	\N	\N
ckurtr44z027380hssyx9yoya	2021-10-12 13:58:54.67	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203550.png	HEADSHOT	\N	\N
ckurtr452028080hs1mqqva1u	2021-10-12 13:58:54.671	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202435.png	HEADSHOT	\N	\N
ckurtr455028780hsffcjfa9x	2021-10-12 13:58:54.673	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203753.png	HEADSHOT	\N	\N
ckurtr458029480hsn2eyacdt	2021-10-12 13:58:54.674	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2472.png	HEADSHOT	\N	\N
ckurtr45c030180hs4gphd2rl	2021-10-12 13:58:54.675	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101278.png	HEADSHOT	\N	\N
ckurtr45f030880hschiy1zc9	2021-10-12 13:58:54.676	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627310.png	HEADSHOT	\N	\N
ckurtr45h031580hsepv50f80	2021-10-12 13:58:54.678	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627604.png	HEADSHOT	\N	\N
ckurtr45k032280hseljg50gj	2021-10-12 13:58:54.679	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2511.png	HEADSHOT	\N	\N
ckurtr45n032980hszmd920px	2021-10-12 13:58:54.681	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202743.png	HEADSHOT	\N	\N
ckurtr45q033680hs3a52ms2a	2021-10-12 13:58:54.682	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2394.png	HEADSHOT	\N	\N
ckurtr45u034380hs7j98r21i	2021-10-12 13:58:54.684	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2794.png	HEADSHOT	\N	\N
ckurtr45w035080hsx4l8i8to	2021-10-12 13:58:54.685	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203811.png	HEADSHOT	\N	\N
ckurtr47q051880hs5amozugq	2021-10-12 13:58:54.686	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204238.png	HEADSHOT	\N	\N
ckurtr47t052580hsy1ruuixn	2021-10-12 13:58:54.687	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202599.png	HEADSHOT	\N	\N
ckurtr47w053280hsssvkaxqb	2021-10-12 13:58:54.688	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628782.png	HEADSHOT	\N	\N
ckurtr47z053980hsedn4y3a3	2021-10-12 13:58:54.69	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628785.png	HEADSHOT	\N	\N
ckurtr481054680hshjkuqsp8	2021-10-12 13:58:54.691	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2868.png	HEADSHOT	\N	\N
ckurtr484055380hs9qxmacq7	2021-10-12 13:58:54.692	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2871.png	HEADSHOT	\N	\N
ckurtr487056080hs5pun5ip0	2021-10-12 13:58:54.694	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2610.png	HEADSHOT	\N	\N
ckurtr462036480hsjqmoq3gz	2021-10-12 13:58:54.648	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612751.svg	LOGO	\N	ckurtr72y1113080hs005x0gxk
ckurtr468037880hs43b6cizd	2021-10-12 13:58:54.653	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612739.svg	LOGO	\N	ckurtr7371115180hslnccru8a
ckurtr46b038580hsjy968xcd	2021-10-12 13:58:54.646	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612742.svg	LOGO	\N	ckurtr73a1115880hsxkdan1ud
ckurtr46e039280hsgcxatjsm	2021-10-12 13:58:54.641	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612743.svg	LOGO	\N	ckurtr73c1116580hs3i36jjw5
ckurtr46h039980hsi3625y2m	2021-10-12 13:58:54.64	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612744.svg	LOGO	\N	ckurtr73h1117980hsrqsjw8xn
ckurtr46m041380hscsuswy9r	2021-10-12 13:58:54.602	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612754.svg	LOGO	\N	ckurtr73n1119380hs6h18kxhb
ckurtr46p042080hsw5uuuwbd	2021-10-12 13:58:54.628	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612746.svg	LOGO	\N	ckurtr73q1120080hsuk9pz8mb
ckurtr46t042780hsxrq8mgp7	2021-10-12 13:58:54.629	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612747.svg	LOGO	\N	ckurtr73t1120780hsfcm6d1g8
ckurtr46w043480hsqvg13fi6	2021-10-12 13:58:54.615	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612748.svg	LOGO	\N	ckurtr73y1122180hs7mhd2u3c
ckurtr46y044180hsi89dvp32	2021-10-12 13:58:54.62	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612749.svg	LOGO	\N	ckurtr7411122880hsbsw23one
ckurtr474045580hsdk63asg0	2021-10-12 13:58:54.627	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612740.svg	LOGO	\N	ckurtr7471124280hshmkzngtt
ckurtr476046280hs6xtl7i4u	2021-10-12 13:58:54.621	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612760.svg	LOGO	\N	ckurtr74e1125680hs5fbtikqr
ckurtr479046980hsampzlpoy	2021-10-12 13:58:54.631	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612753.svg	LOGO	\N	ckurtr74g1126380hsi40absdd
ckurtr47c047680hs0xs7kh87	2021-10-12 13:58:54.623	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612755.svg	LOGO	\N	ckurtr74j1127080hss2acd21l
ckurtr47h049080hsoxk4qejx	2021-10-12 13:58:54.612	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612758.svg	LOGO	\N	ckurtr74q1129180hszuvk8s9g
ckurtr47j049780hsh6j0eu8e	2021-10-12 13:58:54.611	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612759.svg	LOGO	\N	ckurtr74t1129880hsjudk6xi2
ckurtr47l050480hsn4m3v1sk	2021-10-12 13:58:54.608	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612761.svg	LOGO	\N	ckurtr74v1130580hsggipc6wc
ckurtr47o051180hsz6o08jkx	2021-10-12 13:58:54.614	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612762.svg	LOGO	\N	ckurtr74y1131280hsgn5id1b7
ckurtr489056780hsy2rl95m6	2021-10-12 13:58:54.695	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203391.png	HEADSHOT	\N	\N
ckurtr48c057480hs7bh2wuxb	2021-10-12 13:58:54.696	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203759.png	HEADSHOT	\N	\N
ckurtr48e058180hsd12m9o2q	2021-10-12 13:58:54.697	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1018.png	HEADSHOT	\N	\N
ckurtr48h058880hsyivk5onb	2021-10-12 13:58:54.698	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204230.png	HEADSHOT	\N	\N
ckurtr48j059580hs0mec34gq	2021-10-12 13:58:54.7	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1336.png	HEADSHOT	\N	\N
ckurtr48m060280hsnzmka8wq	2021-10-12 13:58:54.701	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201678.png	HEADSHOT	\N	\N
ckurtr48u060980hsu9rbxatc	2021-10-12 13:58:54.702	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204239.png	HEADSHOT	\N	\N
ckurtr491061680hseh3fdg25	2021-10-12 13:58:54.703	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204260.png	HEADSHOT	\N	\N
ckurtr49e062380hs9xtcfgew	2021-10-12 13:58:54.705	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1796.png	HEADSHOT	\N	\N
ckurtr49h063080hs5ljd6rts	2021-10-12 13:58:54.706	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2152.png	HEADSHOT	\N	\N
ckurtr49j063780hsufg0mbc6	2021-10-12 13:58:54.707	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630277.png	HEADSHOT	\N	\N
ckurtr49m064480hsyv24ni6n	2021-10-12 13:58:54.709	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1786.png	HEADSHOT	\N	\N
ckurtr49q065180hsmxgbqhe8	2021-10-12 13:58:54.71	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1257.png	HEADSHOT	\N	\N
ckurtr49u065880hs3o9w41y4	2021-10-12 13:58:54.711	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201765.png	HEADSHOT	\N	\N
ckurtr49x066580hs1xek4vxv	2021-10-12 13:58:54.712	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203785.png	HEADSHOT	\N	\N
ckurtr4a0067280hsort36wjt	2021-10-12 13:58:54.714	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203764.png	HEADSHOT	\N	\N
ckurtr4a2067980hssbcq9h32	2021-10-12 13:58:54.715	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101200.png	HEADSHOT	\N	\N
ckurtr4a4068680hszsv5g669	2021-10-12 13:58:54.716	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2345.png	HEADSHOT	\N	\N
ckurtr4a7069380hsd0xfg47a	2021-10-12 13:58:54.717	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1353.png	HEADSHOT	\N	\N
ckurtr4a9070080hsjy4hzs65	2021-10-12 13:58:54.719	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203456.png	HEADSHOT	\N	\N
ckurtr4ac070780hsswwf59b0	2021-10-12 13:58:54.72	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203624.png	HEADSHOT	\N	\N
ckurtr4ae071480hs8lkw7x8i	2021-10-12 13:58:54.721	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628234.png	HEADSHOT	\N	\N
ckurtr4ag072180hs6hjg5pm7	2021-10-12 13:58:54.722	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630018.png	HEADSHOT	\N	\N
ckurtr4ai072880hserb5v309	2021-10-12 13:58:54.723	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1787.png	HEADSHOT	\N	\N
ckurtr4ak073580hsyebf5zmn	2021-10-12 13:58:54.725	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2630.png	HEADSHOT	\N	\N
ckurtr4an074280hszdtu3bbp	2021-10-12 13:58:54.726	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1370.png	HEADSHOT	\N	\N
ckurtr4ap074980hs2qsl5fd9	2021-10-12 13:58:54.727	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629758.png	HEADSHOT	\N	\N
ckurtr4ar075680hsbn96p5ri	2021-10-12 13:58:54.728	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202859.png	HEADSHOT	\N	\N
ckurtr4at076380hsc9jq6gda	2021-10-12 13:58:54.729	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630017.png	HEADSHOT	\N	\N
ckurtr4av077080hs32q5bjn8	2021-10-12 13:58:54.73	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1865.png	HEADSHOT	\N	\N
ckurtr4ax077780hss62u07ju	2021-10-12 13:58:54.732	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201046.png	HEADSHOT	\N	\N
ckurtr4az078480hstqnn7zrn	2021-10-12 13:58:54.733	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627564.png	HEADSHOT	\N	\N
ckurtr4b1079180hsm7mgojwt	2021-10-12 13:58:54.735	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2384.png	HEADSHOT	\N	\N
ckurtr4b4079880hs8ee69ez2	2021-10-12 13:58:54.736	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628770.png	HEADSHOT	\N	\N
ckurtr4b6080580hsb91ud7or	2021-10-12 13:58:54.737	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628764.png	HEADSHOT	\N	\N
ckurtr4b8081280hsi2asp8ez	2021-10-12 13:58:54.739	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203535.png	HEADSHOT	\N	\N
ckurtr4bb081980hsnbzx79ed	2021-10-12 13:58:54.74	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629710.png	HEADSHOT	\N	\N
ckurtr4bd082680hsqge4bmmq	2021-10-12 13:58:54.741	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202565.png	HEADSHOT	\N	\N
ckurtr4bf083380hs48g3t75j	2021-10-12 13:58:54.742	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202427.png	HEADSHOT	\N	\N
ckurtr4bi084080hs768q42rv	2021-10-12 13:58:54.744	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203165.png	HEADSHOT	\N	\N
ckurtr4bl084780hsdpue1mt7	2021-10-12 13:58:54.745	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203600.png	HEADSHOT	\N	\N
ckurtr4bn085480hs7d9x5al8	2021-10-12 13:58:54.746	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1335.png	HEADSHOT	\N	\N
ckurtr4bq086180hs9f0obkr1	2021-10-12 13:58:54.748	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202101.png	HEADSHOT	\N	\N
ckurtr4bu086880hs6dwmcny4	2021-10-12 13:58:54.749	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204005.png	HEADSHOT	\N	\N
ckurtr4bx087580hspjz3gisg	2021-10-12 13:58:54.751	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628227.png	HEADSHOT	\N	\N
ckurtr4c1088280hsp3n1uvmt	2021-10-12 13:58:54.752	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2205.png	HEADSHOT	\N	\N
ckurtr4c4088980hseugynns2	2021-10-12 13:58:54.754	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627657.png	HEADSHOT	\N	\N
ckurtr4c7089680hshfdijlav	2021-10-12 13:58:54.755	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/384.png	HEADSHOT	\N	\N
ckurtr4c9090380hs1ekg5v9h	2021-10-12 13:58:54.756	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201675.png	HEADSHOT	\N	\N
ckurtr4cc091080hswawts9or	2021-10-12 13:58:54.757	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630361.png	HEADSHOT	\N	\N
ckurtr4ce091780hsu6qkk8vt	2021-10-12 13:58:54.759	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201689.png	HEADSHOT	\N	\N
ckurtr4ch092480hshvbqixt3	2021-10-12 13:58:54.76	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1271.png	HEADSHOT	\N	\N
ckurtr4cj093180hsy8k7gyde	2021-10-12 13:58:54.761	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2814.png	HEADSHOT	\N	\N
ckurtr4cl093880hsvey5wqur	2021-10-12 13:58:54.762	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2010.png	HEADSHOT	\N	\N
ckurtr4cn094580hsquy701be	2021-10-12 13:58:54.764	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203597.png	HEADSHOT	\N	\N
ckurtr4cq095280hsdp56vxic	2021-10-12 13:58:54.765	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2130.png	HEADSHOT	\N	\N
ckurtr4cs095980hsyaeciq0m	2021-10-12 13:58:54.766	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201766.png	HEADSHOT	\N	\N
ckurtr4cu096680hsd2qpgwer	2021-10-12 13:58:54.767	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630290.png	HEADSHOT	\N	\N
ckurtr4cw097380hsho615cgd	2021-10-12 13:58:54.768	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202433.png	HEADSHOT	\N	\N
ckurtr4d0098080hszufp8gly	2021-10-12 13:58:54.77	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204011.png	HEADSHOT	\N	\N
ckurtr4d2098780hs3vtw6np6	2021-10-12 13:58:54.771	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204229.png	HEADSHOT	\N	\N
ckurtr4d4099480hsvi37gzl7	2021-10-12 13:58:54.772	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1281.png	HEADSHOT	\N	\N
ckurtr4d7100180hs2swtdbdk	2021-10-12 13:58:54.773	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2649.png	HEADSHOT	\N	\N
ckurtr4d9100880hsivapls7p	2021-10-12 13:58:54.774	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204224.png	HEADSHOT	\N	\N
ckurtr4db101580hsah885830	2021-10-12 13:58:54.775	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204225.png	HEADSHOT	\N	\N
ckurtr4dd102280hs8ttq34lg	2021-10-12 13:58:54.776	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/452.png	HEADSHOT	\N	\N
ckurtr4df102980hsmu6lffyq	2021-10-12 13:58:54.777	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628772.png	HEADSHOT	\N	\N
ckurtr4dh103680hs8bh1lphv	2021-10-12 13:58:54.778	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/974.png	HEADSHOT	\N	\N
ckurtr4dk104380hsp7up4662	2021-10-12 13:58:54.78	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2146.png	HEADSHOT	\N	\N
ckurtr4dm105080hsr98l971e	2021-10-12 13:58:54.781	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1277.png	HEADSHOT	\N	\N
ckurtr4dp105780hsuhpk30tg	2021-10-12 13:58:54.782	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/777.png	HEADSHOT	\N	\N
ckurtr4dr106480hsnjh4j3gi	2021-10-12 13:58:54.783	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630382.png	HEADSHOT	\N	\N
ckurtr4dt107180hs333p5t64	2021-10-12 13:58:54.785	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630161.png	HEADSHOT	\N	\N
ckurtr4dv107880hsqfucmsdt	2021-10-12 13:58:54.786	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1285.png	HEADSHOT	\N	\N
ckurtr4dx108580hsszy5eyz5	2021-10-12 13:58:54.788	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2519.png	HEADSHOT	\N	\N
ckurtr4dz109280hs4zfxlu49	2021-10-12 13:58:54.789	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101269.png	HEADSHOT	\N	\N
ckurtr4e1109980hsznxebbwr	2021-10-12 13:58:54.79	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627327.png	HEADSHOT	\N	\N
ckurtr4e3110680hsyay4lelz	2021-10-12 13:58:54.791	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2168.png	HEADSHOT	\N	\N
ckurtr4e5111380hsgp3ruczo	2021-10-12 13:58:54.792	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2821.png	HEADSHOT	\N	\N
ckurtr4e8112080hsitnk2t73	2021-10-12 13:58:54.793	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204004.png	HEADSHOT	\N	\N
ckurtr4ea112780hsotym0z8o	2021-10-12 13:58:54.794	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2720.png	HEADSHOT	\N	\N
ckurtr4ed113480hslu87lixv	2021-10-12 13:58:54.795	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1360.png	HEADSHOT	\N	\N
ckurtr4eg114180hs061eiroo	2021-10-12 13:58:54.796	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101273.png	HEADSHOT	\N	\N
ckurtr4ei114880hsajnnmfp1	2021-10-12 13:58:54.797	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202111.png	HEADSHOT	\N	\N
ckurtr4ek115580hskd0j1mlp	2021-10-12 13:58:54.798	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1337.png	HEADSHOT	\N	\N
ckurtr4em116280hszu15pnn0	2021-10-12 13:58:54.799	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203170.png	HEADSHOT	\N	\N
ckurtr4ep116980hso67lq8pf	2021-10-12 13:58:54.801	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2457.png	HEADSHOT	\N	\N
ckurtr4er117680hsugx5c549	2021-10-12 13:58:54.802	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204013.png	HEADSHOT	\N	\N
ckurtr4eu118380hsantghwry	2021-10-12 13:58:54.803	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203167.png	HEADSHOT	\N	\N
ckurtr4ex119080hsk16aazqg	2021-10-12 13:58:54.804	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/873.png	HEADSHOT	\N	\N
ckurtr4f0119780hsm34cb2it	2021-10-12 13:58:54.805	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2887.png	HEADSHOT	\N	\N
ckurtr4f2120480hshl6rzfkx	2021-10-12 13:58:54.806	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203606.png	HEADSHOT	\N	\N
ckurtr4f4121180hsxmrqbyv7	2021-10-12 13:58:54.807	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203604.png	HEADSHOT	\N	\N
ckurtr4f6121880hszymbyh6q	2021-10-12 13:58:54.808	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1356.png	HEADSHOT	\N	\N
ckurtr4f9122580hsu4uuszq9	2021-10-12 13:58:54.809	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1778.png	HEADSHOT	\N	\N
ckurtr4fb123280hsywcpti3t	2021-10-12 13:58:54.81	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2607.png	HEADSHOT	\N	\N
ckurtr4fd123980hs6djsssqz	2021-10-12 13:58:54.811	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202588.png	HEADSHOT	\N	\N
ckurtr4fh124680hst4e6h4ra	2021-10-12 13:58:54.812	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201666.png	HEADSHOT	\N	\N
ckurtr4fk125380hskxrdvefs	2021-10-12 13:58:54.813	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204031.png	HEADSHOT	\N	\N
ckurtr4fm126080hsqa2h71qe	2021-10-12 13:58:54.814	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628179.png	HEADSHOT	\N	\N
ckurtr4fp126780hs83gix2wr	2021-10-12 13:58:54.815	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2086.png	HEADSHOT	\N	\N
ckurtr4fr127480hsf612ur20	2021-10-12 13:58:54.817	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204226.png	HEADSHOT	\N	\N
ckurtr4ft128180hs9pk5wh7p	2021-10-12 13:58:54.818	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1371.png	HEADSHOT	\N	\N
ckurtr4fw128880hskd21ryfo	2021-10-12 13:58:54.819	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203005.png	HEADSHOT	\N	\N
ckurtr4fz129580hsaaf8f4zk	2021-10-12 13:58:54.82	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201692.png	HEADSHOT	\N	\N
ckurtr4g2130280hsixbaey2y	2021-10-12 13:58:54.821	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203143.png	HEADSHOT	\N	\N
ckurtr4g6130980hsm72vnqor	2021-10-12 13:58:54.822	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629432.png	HEADSHOT	\N	\N
ckurtr4g9131680hsc46a7e8a	2021-10-12 13:58:54.823	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1301.png	HEADSHOT	\N	\N
ckurtr4gb132380hskb0r8nh5	2021-10-12 13:58:54.824	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204008.png	HEADSHOT	\N	\N
ckurtr4gd133080hsm563mv69	2021-10-12 13:58:54.825	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203375.png	HEADSHOT	\N	\N
ckurtr4gg133780hsyqa9plsq	2021-10-12 13:58:54.826	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629450.png	HEADSHOT	\N	\N
ckurtr4gi134480hsxdzbuarh	2021-10-12 13:58:54.827	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627380.png	HEADSHOT	\N	\N
ckurtr4gk135180hs11dd0cht	2021-10-12 13:58:54.828	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630455.png	HEADSHOT	\N	\N
ckurtr4gn135880hstdvn0vvf	2021-10-12 13:58:54.829	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627341.png	HEADSHOT	\N	\N
ckurtr4gp136580hsvpkd0tfr	2021-10-12 13:58:54.83	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627164.png	HEADSHOT	\N	\N
ckurtr4gr137280hs4qhxmvt2	2021-10-12 13:58:54.832	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627336.png	HEADSHOT	\N	\N
ckurtr4gu137980hsk9tkcc7x	2021-10-12 13:58:54.833	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629169.png	HEADSHOT	\N	\N
ckurtr4gw138680hsp48tv3hn	2021-10-12 13:58:54.835	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629427.png	HEADSHOT	\N	\N
ckurtr4gz139380hs8k5ccf0o	2021-10-12 13:58:54.836	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629410.png	HEADSHOT	\N	\N
ckurtr4h1140080hsb9p8a38f	2021-10-12 13:58:54.837	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202891.png	HEADSHOT	\N	\N
ckurtr4h5140780hs0girkuyj	2021-10-12 13:58:54.839	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628240.png	HEADSHOT	\N	\N
ckurtr4h8141480hsv3worx1s	2021-10-12 13:58:54.84	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627471.png	HEADSHOT	\N	\N
ckurtr4hb142180hss2felmak	2021-10-12 13:58:54.841	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101272.png	HEADSHOT	\N	\N
ckurtr4he142880hspwy8ih6k	2021-10-12 13:58:54.842	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204012.png	HEADSHOT	\N	\N
ckurtr4hg143580hswritsekn	2021-10-12 13:58:54.843	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1672.png	HEADSHOT	\N	\N
ckurtr4hi144280hsnb18tal5	2021-10-12 13:58:54.844	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/278.png	HEADSHOT	\N	\N
ckurtr4hl144980hsvtuegr7m	2021-10-12 13:58:54.845	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628188.png	HEADSHOT	\N	\N
ckurtr4hn145680hsm53wz37y	2021-10-12 13:58:54.846	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204019.png	HEADSHOT	\N	\N
ckurtr4hq146380hs2bf17bdf	2021-10-12 13:58:54.848	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628181.png	HEADSHOT	\N	\N
ckurtr4ht147080hsyuvt5t47	2021-10-12 13:58:54.85	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1264.png	HEADSHOT	\N	\N
ckurtr4hw147780hsofti50e3	2021-10-12 13:58:54.851	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629144.png	HEADSHOT	\N	\N
ckurtr4hy148480hsjv1cjc20	2021-10-12 13:58:54.852	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629761.png	HEADSHOT	\N	\N
ckurtr4i0149180hsba4prx3q	2021-10-12 13:58:54.854	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201878.png	HEADSHOT	\N	\N
ckurtr4i2149880hsei6d840z	2021-10-12 13:58:54.855	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630282.png	HEADSHOT	\N	\N
ckurtr4i5150580hs9pfeoayi	2021-10-12 13:58:54.856	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2039.png	HEADSHOT	\N	\N
ckurtr4i7151280hs37s3t4q9	2021-10-12 13:58:54.857	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/725.png	HEADSHOT	\N	\N
ckurtr4i9151980hso3v4sy34	2021-10-12 13:58:54.858	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204007.png	HEADSHOT	\N	\N
ckurtr4ib152680hsn7xir99n	2021-10-12 13:58:54.86	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630280.png	HEADSHOT	\N	\N
ckurtr4ie153380hse0j5uy06	2021-10-12 13:58:54.863	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630281.png	HEADSHOT	\N	\N
ckurtr4ig154080hsrf7p3shz	2021-10-12 13:58:54.864	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1997.png	HEADSHOT	\N	\N
ckurtr4ii154780hsjmwve7lb	2021-10-12 13:58:54.865	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101277.png	HEADSHOT	\N	\N
ckurtr4ik155480hs8p2npana	2021-10-12 13:58:54.866	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2623.png	HEADSHOT	\N	\N
ckurtr4im156180hsqhv3hx45	2021-10-12 13:58:54.867	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201665.png	HEADSHOT	\N	\N
ckurtr4io156880hs4rh07fpo	2021-10-12 13:58:54.868	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202105.png	HEADSHOT	\N	\N
ckurtr4ir157580hsjm0txip6	2021-10-12 13:58:54.869	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629711.png	HEADSHOT	\N	\N
ckurtr4it158280hs864tlqt3	2021-10-12 13:58:54.87	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630496.png	HEADSHOT	\N	\N
ckurtr4iu158980hs733db273	2021-10-12 13:58:54.871	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627167.png	HEADSHOT	\N	\N
ckurtr4iw159680hsf42wkbwf	2021-10-12 13:58:54.872	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1658.png	HEADSHOT	\N	\N
ckurtr4iy160380hswtmkirp4	2021-10-12 13:58:54.874	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202898.png	HEADSHOT	\N	\N
ckurtr4j0161080hseuyojnhv	2021-10-12 13:58:54.875	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202978.png	HEADSHOT	\N	\N
ckurtr4j2161780hseiv21pwx	2021-10-12 13:58:54.876	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203243.png	HEADSHOT	\N	\N
ckurtr4j5162480hshd8dkuxp	2021-10-12 13:58:54.877	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628178.png	HEADSHOT	\N	\N
ckurtr4j7163180hsumrs3lbm	2021-10-12 13:58:54.878	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2366.png	HEADSHOT	\N	\N
ckurtr4j9163880hshbna1mga	2021-10-12 13:58:54.879	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629423.png	HEADSHOT	\N	\N
ckurtr4jb164580hs2ds80zcj	2021-10-12 13:58:54.88	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1941.png	HEADSHOT	\N	\N
ckurtr4jd165280hsm9ajwlxi	2021-10-12 13:58:54.881	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1831.png	HEADSHOT	\N	\N
ckurtr4jf165980hs4f0re8cb	2021-10-12 13:58:54.882	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202603.png	HEADSHOT	\N	\N
ckurtr4jh166680hsjb79um2q	2021-10-12 13:58:54.883	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/100616.png	HEADSHOT	\N	\N
ckurtr4jj167380hsjye3sjnk	2021-10-12 13:58:54.885	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201336.png	HEADSHOT	\N	\N
ckurtr4jl168080hso45hn6ah	2021-10-12 13:58:54.886	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2406.png	HEADSHOT	\N	\N
ckurtr4jn168780hswquq322s	2021-10-12 13:58:54.887	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202434.png	HEADSHOT	\N	\N
ckurtr4jp169480hsd26k76wb	2021-10-12 13:58:54.888	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627666.png	HEADSHOT	\N	\N
ckurtr4js170180hss3hec0n0	2021-10-12 13:58:54.889	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628216.png	HEADSHOT	\N	\N
ckurtr4ju170880hsbsathrrg	2021-10-12 13:58:54.89	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1655.png	HEADSHOT	\N	\N
ckurtr4jx171580hs3epl3s4p	2021-10-12 13:58:54.891	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/200744.png	HEADSHOT	\N	\N
ckurtr4jz172280hszvikzoei	2021-10-12 13:58:54.892	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627329.png	HEADSHOT	\N	\N
ckurtr4k2172980hs6nscl1an	2021-10-12 13:58:54.893	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628803.png	HEADSHOT	\N	\N
ckurtr4k5173680hsco0b97j9	2021-10-12 13:58:54.895	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202894.png	HEADSHOT	\N	\N
ckurtr4k8174380hs08sc5yo8	2021-10-12 13:58:54.896	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202431.png	HEADSHOT	\N	\N
ckurtr4kb175080hs9v0rgioo	2021-10-12 13:58:54.897	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629748.png	HEADSHOT	\N	\N
ckurtr4kd175780hsse7hinno	2021-10-12 13:58:54.898	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203152.png	HEADSHOT	\N	\N
ckurtr4kf176480hs0xjifixi	2021-10-12 13:58:54.899	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204085.png	HEADSHOT	\N	\N
ckurtr4ki177180hsmu7xrr12	2021-10-12 13:58:54.9	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201690.png	HEADSHOT	\N	\N
ckurtr4kk177880hs2m7mjx4s	2021-10-12 13:58:54.901	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628784.png	HEADSHOT	\N	\N
ckurtr4km178580hsc7nzhao2	2021-10-12 13:58:54.902	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/100101.png	HEADSHOT	\N	\N
ckurtr4ko179280hs5i115e8g	2021-10-12 13:58:54.903	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202108.png	HEADSHOT	\N	\N
ckurtr4kr179980hsgx6l4ib2	2021-10-12 13:58:54.904	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627328.png	HEADSHOT	\N	\N
ckurtr4kt180680hswnudcv6y	2021-10-12 13:58:54.905	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201682.png	HEADSHOT	\N	\N
ckurtr4kv181380hss78vt7rl	2021-10-12 13:58:54.906	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201220.png	HEADSHOT	\N	\N
ckurtr4kx182080hsdoubr21n	2021-10-12 13:58:54.907	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202985.png	HEADSHOT	\N	\N
ckurtr4l0182780hsob99cmtb	2021-10-12 13:58:54.908	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1626233.png	HEADSHOT	\N	\N
ckurtr4l1183480hserk60kpv	2021-10-12 13:58:54.909	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203601.png	HEADSHOT	\N	\N
ckurtr4l3184180hsg2zzhdxg	2021-10-12 13:58:54.911	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630363.png	HEADSHOT	\N	\N
ckurtr4l5184880hsuy5vddlk	2021-10-12 13:58:54.913	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630364.png	HEADSHOT	\N	\N
ckurtr4l7185580hsx2c9yvsh	2021-10-12 13:58:54.914	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628807.png	HEADSHOT	\N	\N
ckurtr4l9186280hsg08ujdpf	2021-10-12 13:58:54.915	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629412.png	HEADSHOT	\N	\N
ckurtr4lb186980hsx9hge55u	2021-10-12 13:58:54.916	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/204286.png	HEADSHOT	\N	\N
ckurtr4ld187680hsak7dvre3	2021-10-12 13:58:54.917	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1320.png	HEADSHOT	\N	\N
ckurtr4lf188380hssqwltrkl	2021-10-12 13:58:54.918	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1497.png	HEADSHOT	\N	\N
ckurtr4lh189080hs6kh40lbt	2021-10-12 13:58:54.919	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628472.png	HEADSHOT	\N	\N
ckurtr4lk189780hso9y9ggpo	2021-10-12 13:58:54.92	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203168.png	HEADSHOT	\N	\N
ckurtr4lm190480hs80uht7oj	2021-10-12 13:58:54.921	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202602.png	HEADSHOT	\N	\N
ckurtr4lo191180hs12p6vuwu	2021-10-12 13:58:54.922	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629110.png	HEADSHOT	\N	\N
ckurtr4lq191880hs675846x7	2021-10-12 13:58:54.923	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1226.png	HEADSHOT	\N	\N
ckurtr4ls192580hszqdw8vdr	2021-10-12 13:58:54.924	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201696.png	HEADSHOT	\N	\N
ckurtr4lu193280hsvqepy0cr	2021-10-12 13:58:54.925	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203758.png	HEADSHOT	\N	\N
ckurtr4lw193980hswt0r8hlr	2021-10-12 13:58:54.926	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1630491.png	HEADSHOT	\N	\N
ckurtr4ly194680hs5o6mjk6r	2021-10-12 13:58:54.928	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203599.png	HEADSHOT	\N	\N
ckurtr4m0195380hsvvrrikfx	2021-10-12 13:58:54.929	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203797.png	HEADSHOT	\N	\N
ckurtr4m2196080hsttjtv5wb	2021-10-12 13:58:54.93	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/201676.png	HEADSHOT	\N	\N
ckurtr4m4196780hsj7wnbn9s	2021-10-12 13:58:54.931	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2515.png	HEADSHOT	\N	\N
ckurtr4m6197480hsyj5imsc3	2021-10-12 13:58:54.932	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627331.png	HEADSHOT	\N	\N
ckurtr4m8198180hsxzkt4zpe	2021-10-12 13:58:54.933	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203150.png	HEADSHOT	\N	\N
ckurtr4ma198880hsipkvu7xr	2021-10-12 13:58:54.935	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1628228.png	HEADSHOT	\N	\N
ckurtr4md199580hshgh7khcw	2021-10-12 13:58:54.936	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1627971.png	HEADSHOT	\N	\N
ckurtr4me200280hsdld809f1	2021-10-12 13:58:54.937	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101203.png	HEADSHOT	\N	\N
ckurtr4mh200980hso1qr2ccm	2021-10-12 13:58:54.938	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202109.png	HEADSHOT	\N	\N
ckurtr4mj201680hs4cwtham2	2021-10-12 13:58:54.94	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202896.png	HEADSHOT	\N	\N
ckurtr4mm202380hs69yfsz89	2021-10-12 13:58:54.941	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/101173.png	HEADSHOT	\N	\N
ckurtr4mo203080hsh2bsozic	2021-10-12 13:58:54.942	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1243.png	HEADSHOT	\N	\N
ckurtr4mq203780hsixh596ao	2021-10-12 13:58:54.943	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/203605.png	HEADSHOT	\N	\N
ckurtr4mt204480hshf9d4oot	2021-10-12 13:58:54.944	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/2443.png	HEADSHOT	\N	\N
ckurtr4mv205180hsymldnuzi	2021-10-12 13:58:54.945	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1629821.png	HEADSHOT	\N	\N
ckurtr4mx205880hs09tvr25t	2021-10-12 13:58:54.946	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/202439.png	HEADSHOT	\N	\N
ckurtr4n0206580hsanhr0cde	2021-10-12 13:58:54.947	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/coaches/1312.png	HEADSHOT	\N	\N
ckurtr4n5207980hsy69mhn4s	2021-10-12 13:58:54.953	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629605.png	HEADSHOT	ckurtr5m1578280hsm214peov	\N
ckurtr4n8208680hs8njh4l2a	2021-10-12 13:58:54.954	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201933.png	HEADSHOT	ckurtr5m4578980hscqi83170	\N
ckurtr4na209380hsoivuf7ue	2021-10-12 13:58:54.955	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202681.png	HEADSHOT	ckurtr5m7579680hspkdetl5s	\N
ckurtr4nc210080hsa78xshir	2021-10-12 13:58:54.957	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201935.png	HEADSHOT	ckurtr5m9580380hsm0h0chri	\N
ckurtr4ne210780hsl4ozro72	2021-10-12 13:58:54.958	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628970.png	HEADSHOT	ckurtr5mc581080hs51hl4rf9	\N
ckurtr4nj212180hs0u5aqi1t	2021-10-12 13:58:54.962	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202954.png	HEADSHOT	ckurtr6gt882080hsmv34n5qw	\N
ckurtr4nm212880hsv9eg4etz	2021-10-12 13:58:54.963	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628998.png	HEADSHOT	ckurtr6gv882780hsn4xyufi8	\N
ckurtr4no213580hshqoymclt	2021-10-12 13:58:54.964	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202330.png	HEADSHOT	ckurtr6gx883480hsy0u7ahti	\N
ckurtr4nr214280hs7c3kwk3i	2021-10-12 13:58:54.965	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629023.png	HEADSHOT	ckurtr6gz884180hsowijrxzy	\N
ckurtr4nt214980hs7hpou04g	2021-10-12 13:58:54.967	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629750.png	HEADSHOT	ckurtr5mm583880hs8f8cj65o	\N
ckurtr4nv215680hsdhwn5915	2021-10-12 13:58:54.968	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628464.png	HEADSHOT	ckurtr5mo584580hsa3xpna6w	\N
ckurtr4o0217080hsdb9h6qdd	2021-10-12 13:58:54.971	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629662.png	HEADSHOT	ckurtr5mz587380hs6jos43oz	\N
ckurtr4o2217780hsyva5y0xb	2021-10-12 13:58:54.972	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629731.png	HEADSHOT	ckurtr5n1588080hs72t1zfte	\N
ckurtr4o4218480hspp4a59im	2021-10-12 13:58:54.973	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/204001.png	HEADSHOT	ckurtr5n3588780hsv5c6caxv	\N
ckurtr4o6219180hsaw5r6768	2021-10-12 13:58:54.976	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/200755.png	HEADSHOT	ckurtr5n8590180hs0d26ll8i	\N
ckurtr4o8219880hsdc7nlfps	2021-10-12 13:58:54.977	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626161.png	HEADSHOT	ckurtr5nb590880hse21etj0r	\N
ckurtr4oa220580hsyqdjnjt3	2021-10-12 13:58:54.978	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628420.png	HEADSHOT	ckurtr5nj592980hsvavhbrfy	\N
ckurtr4od221980hsx8e8dfyy	2021-10-12 13:58:54.96	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626179.png	HEADSHOT	ckurtr6df842880hsbrhjno38	\N
ckurtr4of222680hsfe3k9mc5	2021-10-12 13:58:54.97	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628422.png	HEADSHOT	ckurtr6dr846380hs316t5zqp	\N
ckurtr4oh223380hsoxula5zy	2021-10-12 13:58:55.009	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626224.png	HEADSHOT	ckurtr5mx586680hsllmxeqk8	\N
ckurtr4oj224080hssxtmliyf	2021-10-12 13:58:55.01	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629029.png	HEADSHOT	ckurtr6h1884880hs0jurup1e	\N
ckurtr4ol224780hsyqcwftdr	2021-10-12 13:58:55.011	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203115.png	HEADSHOT	ckurtr5ne591580hszj8d5jpv	\N
ckurtr4op226180hs19ubbcbh	2021-10-12 13:58:55.013	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201580.png	HEADSHOT	ckurtr5no594380hsrx53gimi	\N
ckurtr4or226880hs4jlndbw5	2021-10-12 13:58:55.014	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628408.png	HEADSHOT	ckurtr6h3885580hs0g3e6k3n	\N
ckurtr4ot227580hswxyt4wzv	2021-10-12 13:58:54.981	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628372.png	HEADSHOT	ckurtr5nq595080hs89rdtuhy	\N
ckurtr4ov228280hsh9jns900	2021-10-12 13:58:55.015	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629076.png	HEADSHOT	ckurtr5ns595780hsbl5bfcsu	\N
ckurtr4ox228980hs3a7auv03	2021-10-12 13:58:55.018	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628539.png	HEADSHOT	ckurtr5nv596480hs00aj2ulr	\N
ckurtr4oz229680hsp5zdy0p5	2021-10-12 13:58:54.982	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630167.png	HEADSHOT	ckurtr5nx597180hs8446m2rd	\N
ckurtr4p3231080hsaqotyfky	2021-10-12 13:58:54.986	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629676.png	HEADSHOT	ckurtr5o4599280hsw2bbvzei	\N
ckurtr4p7232480hsl86ix8oe	2021-10-12 13:58:54.988	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628407.png	HEADSHOT	ckurtr5o8600680hsnf0hpc2y	\N
ckurtr4p9233180hs3zn89fix	2021-10-12 13:58:55.005	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628968.png	HEADSHOT	ckurtr5oa601380hs5gbdlmgv	\N
ckurtr4pc233880hswlx5zytf	2021-10-12 13:58:54.989	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630175.png	HEADSHOT	ckurtr5od602080hsoqtm71iq	\N
ckurtr4pe234580hsrwbshn0k	2021-10-12 13:58:55.004	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629066.png	HEADSHOT	ckurtr5oh603480hsaytntgir	\N
ckurtr4pk235980hsw6qdqzmt	2021-10-12 13:58:54.993	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630194.png	HEADSHOT	ckurtr5om604880hsagjzygk4	\N
ckurtr4pm236680hszqxhz1un	2021-10-12 13:58:54.995	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630188.png	HEADSHOT	ckurtr5oo605580hsud7sz7cd	\N
ckurtr4po237380hsxmne0x3c	2021-10-12 13:58:54.996	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202683.png	HEADSHOT	ckurtr5oq606280hs3o3ca36x	\N
ckurtr4pr238080hsxg2r9hyf	2021-10-12 13:58:54.997	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629604.png	HEADSHOT	ckurtr5ou607680hsue6koncs	\N
ckurtr4pt238780hsp3ew2q8a	2021-10-12 13:58:54.999	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630218.png	HEADSHOT	ckurtr5ow608380hsk63nm4zh	\N
ckurtr4pv239480hs3twxug8g	2021-10-12 13:58:55	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630170.png	HEADSHOT	ckurtr5oy609080hshf0m03br	\N
ckurtr4q1240880hs22nyctlj	2021-10-12 13:58:55.002	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630201.png	HEADSHOT	ckurtr5p2610480hs025npps6	\N
ckurtr4q4241580hsickkfw9o	2021-10-12 13:58:55.003	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630235.png	HEADSHOT	ckurtr5p4611180hs5y1rsed1	\N
ckurtr4q6242280hs55gymyra	2021-10-12 13:58:55.019	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203110.png	HEADSHOT	ckurtr5pj616080hsumsacbc4	\N
ckurtr4q8242980hsqjxq5wzt	2021-10-12 13:58:55.02	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202340.png	HEADSHOT	ckurtr6h5886280hs93qez79h	\N
ckurtr4qa243680hsdels5jqy	2021-10-12 13:58:55.029	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202083.png	HEADSHOT	ckurtr6h7886980hsw8lrpaev	\N
ckurtr4qc244380hskhf3c22a	2021-10-12 13:58:55.017	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629672.png	HEADSHOT	ckurtr5tk651780hsg5j9lm49	\N
ckurtr4qh245780hs50p8537h	2021-10-12 13:58:55.022	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203933.png	HEADSHOT	ckurtr5tw655280hsv41bvvvb	\N
ckurtr4qj246480hszrbmo78b	2021-10-12 13:58:55.025	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201976.png	HEADSHOT	ckurtr6ho891880hs9yq2ou8b	\N
ckurtr4ql247180hse4mly46s	2021-10-12 13:58:55.026	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203484.png	HEADSHOT	ckurtr5ub659480hsxakemwfg	\N
ckurtr4qn247880hsmiwuhz7q	2021-10-12 13:58:55.027	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203083.png	HEADSHOT	ckurtr5ue660180hsp7eka6cj	\N
ckurtr4qq248580hsnzbf4ddy	2021-10-12 13:58:55.028	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629659.png	HEADSHOT	ckurtr5uk661580hskkgf2asb	\N
ckurtr4qu249980hswi2p9jf3	2021-10-12 13:58:55.016	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629346.png	HEADSHOT	ckurtr6es858280hsu9ybqtyj	\N
ckurtr4qw250680hswkile96n	2021-10-12 13:58:54.983	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202689.png	HEADSHOT	ckurtr6lr937380hsj1owq0xv	\N
ckurtr4qy251380hsoyc1dci4	2021-10-12 13:58:54.994	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630234.png	HEADSHOT	ckurtr6fy870880hsmoqvz5qf	\N
ckurtr4r0252080hsdhi5tk5q	2021-10-12 13:58:55.069	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629035.png	HEADSHOT	ckurtr5st645480hs8c0er0b2	\N
ckurtr4r2252780hs50yovqhf	2021-10-12 13:58:55.07	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630174.png	HEADSHOT	ckurtr6hd888380hs4noa0lrm	\N
ckurtr4r4253480hs3g4fi15f	2021-10-12 13:58:55.071	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203935.png	HEADSHOT	ckurtr6hg889080hscg09icds	\N
ckurtr4r8254880hsjlyqmtvh	2021-10-12 13:58:55.072	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626196.png	HEADSHOT	ckurtr5t3647580hsqp9uzmsy	\N
ckurtr4ra255580hswh03pn63	2021-10-12 13:58:55.076	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203924.png	HEADSHOT	ckurtr5ta648980hsdg4676mq	\N
ckurtr4rc256280hsy9ozywmj	2021-10-12 13:58:55.077	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626143.png	HEADSHOT	ckurtr5tc649680hs9s6pmida	\N
ckurtr4rd256980hszmjogr4o	2021-10-12 13:58:55.078	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203585.png	HEADSHOT	ckurtr5tf650380hsuwub90sp	\N
ckurtr4rf257680hsv68gpjsz	2021-10-12 13:58:55.079	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202709.png	HEADSHOT	ckurtr6hi889780hsc1q8tlez	\N
ckurtr4ri258380hs4qhl5d56	2021-10-12 13:58:55.08	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627814.png	HEADSHOT	ckurtr5ti651080hs2krdydle	\N
ckurtr4rl259780hst7ptvy3d	2021-10-12 13:58:55.083	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628425.png	HEADSHOT	ckurtr5tp653180hseia9kbd3	\N
ckurtr4rn260480hsk0rdkp5r	2021-10-12 13:58:55.066	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203121.png	HEADSHOT	ckurtr5tt654580hs1qz9z44f	\N
ckurtr4rp261180hsbdbdnh6w	2021-10-12 13:58:55.031	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629719.png	HEADSHOT	ckurtr6hq892580hsjstnm8qw	\N
ckurtr4rr261880hs00jwt9qr	2021-10-12 13:58:55.032	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628035.png	HEADSHOT	ckurtr6hs893280hslknbeqtw	\N
ckurtr4rt262580hsvfisjv40	2021-10-12 13:58:55.033	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629634.png	HEADSHOT	ckurtr5un662280hsys2a0ck7	\N
ckurtr4rv263280hsnd2a453w	2021-10-12 13:58:55.039	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629130.png	HEADSHOT	ckurtr5us663680hsn951pwor	\N
ckurtr4rz264680hsy5si0oja	2021-10-12 13:58:55.041	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/200782.png	HEADSHOT	ckurtr5uw665080hsudvic271	\N
ckurtr4s2265380hsrqfi4wga	2021-10-12 13:58:55.042	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626192.png	HEADSHOT	ckurtr5uz665780hsb0hilnxf	\N
ckurtr4s7266780hsinwaveyo	2021-10-12 13:58:55.044	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629675.png	HEADSHOT	ckurtr5v5667180hsz8yd5ugo	\N
ckurtr4s9267480hs0gtcclip	2021-10-12 13:58:55.046	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628404.png	HEADSHOT	ckurtr5va668580hs0ll0ej6q	\N
ckurtr4sc268180hshxpfc3y7	2021-10-12 13:58:55.047	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201949.png	HEADSHOT	ckurtr5vd669280hst10a9gzj	\N
ckurtr4se268880hsq6fbq83n	2021-10-12 13:58:55.048	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201565.png	HEADSHOT	ckurtr5vf669980hs6qrwf08d	\N
ckurtr4si270280hsohrdk37l	2021-10-12 13:58:55.051	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203493.png	HEADSHOT	ckurtr5vl671380hsxsuw4b9f	\N
ckurtr4sk270980hschs7oxin	2021-10-12 13:58:55.054	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629652.png	HEADSHOT	ckurtr5vq672780hsk6mxmwaq	\N
ckurtr4sn271680hs7d9mm8nh	2021-10-12 13:58:55.055	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203914.png	HEADSHOT	ckurtr5vs673480hsldcu0bk0	\N
ckurtr4sp272380hs7t9kb48p	2021-10-12 13:58:55.056	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201588.png	HEADSHOT	ckurtr5vu674180hshw8v38uq	\N
ckurtr4ss273080hsqibpxt1p	2021-10-12 13:58:55.058	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/204038.png	HEADSHOT	ckurtr5vw674880hsdszhzuh1	\N
ckurtr4su273780hsz3oa045z	2021-10-12 13:58:55.06	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201988.png	HEADSHOT	ckurtr5w3676980hsaqz1df84	\N
ckurtr4sz275180hsjwffz5jy	2021-10-12 13:58:55.063	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630166.png	HEADSHOT	ckurtr5wc679080hsnhwensm1	\N
ckurtr4t2275880hss3uz4f08	2021-10-12 13:58:55.065	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630264.png	HEADSHOT	ckurtr6ju916380hsxfvphc6y	\N
ckurtr4t4276580hszzsewyvu	2021-10-12 13:58:55.067	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628381.png	HEADSHOT	ckurtr6jf911480hs9ft2ykwo	\N
ckurtr4t6277280hsa0n62gaa	2021-10-12 13:58:55.068	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629629.png	HEADSHOT	ckurtr6jh912180hsgw8ccsbh	\N
ckurtr4t8277980hs72lgawdj	2021-10-12 13:58:55.074	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203915.png	HEADSHOT	ckurtr6dd842180hs7xmz1ggw	\N
ckurtr4ta278680hsfwp47zf1	2021-10-12 13:58:55.085	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201571.png	HEADSHOT	ckurtr6ex859680hsxpgtgjrb	\N
ckurtr4tf280080hsn13ye6i5	2021-10-12 13:58:55.064	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201577.png	HEADSHOT	ckurtr6gn879980hs1s98zabd	\N
ckurtr4th280780hs6iipj404	2021-10-12 13:58:55.136	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630172.png	HEADSHOT	ckurtr5pe614680hscbekf4r0	\N
ckurtr4tj281480hslemirzlz	2021-10-12 13:58:55.087	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202695.png	HEADSHOT	ckurtr5pw619580hslq4ksm3p	\N
ckurtr4tl282180hs19yqnfne	2021-10-12 13:58:55.098	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629020.png	HEADSHOT	ckurtr5qh625180hsgc0ds4nu	\N
ckurtr4to282880hsc54z2xu6	2021-10-12 13:58:55.099	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627742.png	HEADSHOT	ckurtr5qp627280hsb6gdrt68	\N
ckurtr4ts284280hse0wt9nl0	2021-10-12 13:58:55.102	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203488.png	HEADSHOT	ckurtr5r3631480hsodejjo40	\N
ckurtr4tv284980hsh7cqvkrn	2021-10-12 13:58:55.103	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628964.png	HEADSHOT	ckurtr5r7632880hsu9wgihij	\N
ckurtr4tx285680hs648aehms	2021-10-12 13:58:55.108	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203994.png	HEADSHOT	ckurtr5rw639180hs0dybzf26	\N
ckurtr4u0286380hsexn84onl	2021-10-12 13:58:55.109	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628368.png	HEADSHOT	ckurtr5s0639880hsdrx49z8h	\N
ckurtr4u2287080hsz79r9t32	2021-10-12 13:58:55.111	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203090.png	HEADSHOT	ckurtr5s3640580hsaqieran3	\N
ckurtr4u4287780hsr2px7972	2021-10-12 13:58:55.113	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629234.png	HEADSHOT	ckurtr5sa641980hslqmq925x	\N
ckurtr4u8289180hs24e6ho18	2021-10-12 13:58:55.086	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202704.png	HEADSHOT	ckurtr5u3657380hsq3y19odv	\N
ckurtr4ua289880hsbj15wdpl	2021-10-12 13:58:55.088	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/200765.png	HEADSHOT	ckurtr5u6658080hsrced2aot	\N
ckurtr4uc290580hskqystjj6	2021-10-12 13:58:55.089	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628379.png	HEADSHOT	ckurtr5u9658780hs5xhaiqvg	\N
ckurtr4ue291280hslgyehyaq	2021-10-12 13:58:55.09	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202331.png	HEADSHOT	ckurtr6hm891180hsobf83bxx	\N
ckurtr4ug291980hsc8ttfgkw	2021-10-12 13:58:55.124	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203095.png	HEADSHOT	ckurtr6hv893980hsv3ciome0	\N
ckurtr4uj292680hsz917azja	2021-10-12 13:58:55.125	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629617.png	HEADSHOT	ckurtr6hx894680hsm1wpyg5g	\N
ckurtr4uo294080hsjpz5z0xq	2021-10-12 13:58:55.128	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629653.png	HEADSHOT	ckurtr5wl681880hsznus126p	\N
ckurtr4uq294780hsfx5al30z	2021-10-12 13:58:55.129	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626245.png	HEADSHOT	ckurtr5wn682580hs3i8peudz	\N
ckurtr4us295480hsgp1o4cd4	2021-10-12 13:58:55.131	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203897.png	HEADSHOT	ckurtr6i5896780hswa3zvogc	\N
ckurtr4uv296180hshok3pd2k	2021-10-12 13:58:55.137	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627853.png	HEADSHOT	ckurtr6i8897480hsap0watsc	\N
ckurtr4uy296880hsprmo5wad	2021-10-12 13:58:55.139	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630205.png	HEADSHOT	ckurtr5ws683980hsapmmsukd	\N
ckurtr4v0297580hskjlcvt9m	2021-10-12 13:58:55.092	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629630.png	HEADSHOT	ckurtr5y0697980hs0q86ydlx	\N
ckurtr4v5298980hs8cr6xaf4	2021-10-12 13:58:55.095	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628389.png	HEADSHOT	ckurtr5y5699380hs9q2shel0	\N
ckurtr4v8299680hsmu58a7ca	2021-10-12 13:58:55.097	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626156.png	HEADSHOT	ckurtr5yb700780hsqj1tnnu5	\N
ckurtr4ve301080hswcq3zi70	2021-10-12 13:58:55.106	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629028.png	HEADSHOT	ckurtr5yl702880hs91nlwobk	\N
ckurtr4vh301780hskvc9dvq9	2021-10-12 13:58:55.107	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629661.png	HEADSHOT	ckurtr5yo703580hstji8ahrv	\N
ckurtr4vj302480hseb6frn52	2021-10-12 13:58:55.123	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629735.png	HEADSHOT	ckurtr5yw705680hs0ri0dw3y	\N
ckurtr4vl303180hsyomaloaz	2021-10-12 13:58:55.116	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627832.png	HEADSHOT	ckurtr5z1706380hszshfqu7g	\N
ckurtr4vn303880hs86z2n0sm	2021-10-12 13:58:55.118	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627783.png	HEADSHOT	ckurtr6m0940180hs8pi8byws	\N
ckurtr4vs305280hslr8me2cp	2021-10-12 13:58:55.12	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203497.png	HEADSHOT	ckurtr5zb708480hsx5iw7dwn	\N
ckurtr4vu305980hsyedzrn14	2021-10-12 13:58:55.121	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629060.png	HEADSHOT	ckurtr5ze709180hsp9v5nvjo	\N
ckurtr4vw306680hsjdtdyz4i	2021-10-12 13:58:55.122	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629726.png	HEADSHOT	ckurtr5zh709880hsjve0d1o9	\N
ckurtr4vy307380hs80jbfdt3	2021-10-12 13:58:55.127	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630268.png	HEADSHOT	ckurtr6di843580hsoms7h0di	\N
ckurtr4w1308080hsnhtobjjd	2021-10-12 13:58:55.104	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203082.png	HEADSHOT	ckurtr6fu869480hsv7wp7d0b	\N
ckurtr4w3308780hsnduiomg7	2021-10-12 13:58:55.115	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629139.png	HEADSHOT	ckurtr6ga875080hsjiag4te3	\N
ckurtr4w7310180hsagpll2p0	2021-10-12 13:58:55.146	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203957.png	HEADSHOT	ckurtr5pp617480hsmez7o1fm	\N
ckurtr4w9310880hsu602kdj7	2021-10-12 13:58:55.147	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628410.png	HEADSHOT	ckurtr5pr618180hsctndel2t	\N
ckurtr4wb311580hs6dx2cejb	2021-10-12 13:58:55.149	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203087.png	HEADSHOT	ckurtr5pt618880hsflssn19h	\N
ckurtr4wd312280hsoeob53hy	2021-10-12 13:58:55.15	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/2544.png	HEADSHOT	ckurtr5py620280hsani2twjx	\N
ckurtr4wf312980hsf4mao3ua	2021-10-12 13:58:55.155	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629216.png	HEADSHOT	ckurtr5q6622380hsyu7a5ycc	\N
ckurtr4wi314380hsw2aeq0zo	2021-10-12 13:58:55.158	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201937.png	HEADSHOT	ckurtr6lc932480hs7jzl1zsw	\N
ckurtr4wk315080hse0511swu	2021-10-12 13:58:55.159	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627823.png	HEADSHOT	ckurtr6lj934580hswdzg0kve	\N
ckurtr4wm315780hswq42o8ks	2021-10-12 13:58:55.16	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629627.png	HEADSHOT	ckurtr5qk625880hsxalojf26	\N
ckurtr4wo316480hsdogkrkar	2021-10-12 13:58:55.164	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203457.png	HEADSHOT	ckurtr5qs627980hssmxevoq0	\N
ckurtr4wr317180hszhabhtac	2021-10-12 13:58:55.165	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629628.png	HEADSHOT	ckurtr5qw629380hsrdbhcwao	\N
ckurtr4ws317880hs210fsyj3	2021-10-12 13:58:55.195	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627737.png	HEADSHOT	ckurtr5r1630780hs4qv1bizu	\N
ckurtr4ww319280hse6wlyhz1	2021-10-12 13:58:55.168	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629003.png	HEADSHOT	ckurtr5rf634980hshlvcegik	\N
ckurtr4wy319980hsezg0i217	2021-10-12 13:58:55.169	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/2730.png	HEADSHOT	ckurtr5ri635680hs0zqvw1ii	\N
ckurtr4x0320680hs1npoiomx	2021-10-12 13:58:55.172	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203967.png	HEADSHOT	ckurtr5ro637080hsu1umdtqa	\N
ckurtr4x2321380hsrkozozpm	2021-10-12 13:58:55.173	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202734.png	HEADSHOT	ckurtr5rq637780hsgo0kjmi3	\N
ckurtr4x4322080hsbofuifj4	2021-10-12 13:58:55.174	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203109.png	HEADSHOT	ckurtr6ll935280hs0w0y4lg2	\N
ckurtr4x8323480hsykomdszc	2021-10-12 13:58:55.189	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628378.png	HEADSHOT	ckurtr5sh643380hsqxmayh2l	\N
ckurtr4xa324180hsi1rxdinz	2021-10-12 13:58:55.191	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203526.png	HEADSHOT	ckurtr5sr644780hs0j5loadf	\N
ckurtr4xc324880hspmfk3iah	2021-10-12 13:58:55.18	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629657.png	HEADSHOT	ckurtr5vz675580hsxacuafum	\N
ckurtr4xd325580hs5fw5ll3g	2021-10-12 13:58:55.182	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626153.png	HEADSHOT	ckurtr5w1676280hsptf8fb2n	\N
ckurtr4xf326280hsnnu97v5k	2021-10-12 13:58:55.192	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/204222.png	HEADSHOT	ckurtr5we679780hspt2jtppy	\N
ckurtr4xh326980hsc3it6p6k	2021-10-12 13:58:55.193	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627775.png	HEADSHOT	ckurtr5ww685380hskc4cqgh7	\N
ckurtr4xl328380hszj91cp8k	2021-10-12 13:58:55.143	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/200794.png	HEADSHOT	ckurtr5x8689580hs022shuqm	\N
ckurtr4xn329080hs6rz1hkc8	2021-10-12 13:58:55.153	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203937.png	HEADSHOT	ckurtr5xu696580hs8gg0nvhj	\N
ckurtr4xp329780hsp9r0ct5w	2021-10-12 13:58:55.154	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628960.png	HEADSHOT	ckurtr5xx697280hshxt3wgxe	\N
ckurtr4xs330480hscf4jgngp	2021-10-12 13:58:55.162	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629637.png	HEADSHOT	ckurtr5yf701480hsn20vaegh	\N
ckurtr4xv331180hs4b2qss72	2021-10-12 13:58:55.184	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628401.png	HEADSHOT	ckurtr5yr704280hs5lasnpsg	\N
ckurtr4xx331880hszv5396ou	2021-10-12 13:58:55.185	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628966.png	HEADSHOT	ckurtr5yt704980hs1thxejv4	\N
ckurtr4y1333280hse7tcpbor	2021-10-12 13:58:55.178	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203468.png	HEADSHOT	ckurtr62b737180hsmi4ixc4q	\N
ckurtr4y3333980hs7hngzd2v	2021-10-12 13:58:55.198	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/101150.png	HEADSHOT	ckurtr6e8851980hsxp5zn3a1	\N
ckurtr4y9335380hsqro2ftt2	2021-10-12 13:58:55.2	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628981.png	HEADSHOT	ckurtr6jj912880hsdyds6cyi	\N
ckurtr4yc336080hskirouszj	2021-10-12 13:58:55.144	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203932.png	HEADSHOT	ckurtr6el856180hso44jvthk	\N
ckurtr4ye336780hsw7apn7vf	2021-10-12 13:58:55.187	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203918.png	HEADSHOT	ckurtr6gc875780hsle3bthl3	\N
ckurtr4yg337480hs5sjzr8yp	2021-10-12 13:58:55.176	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203081.png	HEADSHOT	ckurtr6lp936680hsrj27cat7	\N
ckurtr4yi338180hs1no3x9bz	2021-10-12 13:58:55.206	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628374.png	HEADSHOT	ckurtr5pc613980hsv7gx7wsd	\N
ckurtr4yn339580hsxr1t5n3t	2021-10-12 13:58:55.228	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203506.png	HEADSHOT	ckurtr5q9623080hsmxrpj45o	\N
ckurtr4yp340280hskufl4u2y	2021-10-12 13:58:55.23	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627736.png	HEADSHOT	ckurtr5qe624480hs7ddqvwpg	\N
ckurtr4yr340980hszcklvp1x	2021-10-12 13:58:55.232	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202334.png	HEADSHOT	ckurtr6le933180hsc0esnpkb	\N
ckurtr4yt341680hs4b3puzjk	2021-10-12 13:58:55.239	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629026.png	HEADSHOT	ckurtr5r5632180hs0sr5gi4s	\N
ckurtr4yv342380hsymt9pgb3	2021-10-12 13:58:55.24	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203118.png	HEADSHOT	ckurtr5r9633580hsz2q7pl55	\N
ckurtr4z0343780hs3zh13ila	2021-10-12 13:58:55.222	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203926.png	HEADSHOT	ckurtr5u1656680hsp259r6nc	\N
ckurtr4z2344480hsm4w0ak1g	2021-10-12 13:58:55.202	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628971.png	HEADSHOT	ckurtr6i0895380hskpvubrpd	\N
ckurtr4z4345180hswbg0z9ch	2021-10-12 13:58:55.204	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628997.png	HEADSHOT	ckurtr5wj681180hs8hu7di9c	\N
ckurtr4z6345880hs8k7wltqa	2021-10-12 13:58:55.207	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629012.png	HEADSHOT	ckurtr5wp683280hspc1x9gqy	\N
ckurtr4z8346580hsjn99k79b	2021-10-12 13:58:55.21	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630271.png	HEADSHOT	ckurtr5wu684680hs2sgbj7ft	\N
ckurtr4za347280hst01z81zx	2021-10-12 13:58:55.212	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630171.png	HEADSHOT	ckurtr5wy686080hskawkaxsg	\N
ckurtr4ze348680hsub3w414g	2021-10-12 13:58:55.214	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630179.png	HEADSHOT	ckurtr5x2687480hslqkr1eew	\N
ckurtr4zf349380hs6rxrk79i	2021-10-12 13:58:55.216	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629673.png	HEADSHOT	ckurtr5xc690980hshg66cou5	\N
ckurtr4zh350080hsa20hcila	2021-10-12 13:58:55.217	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628391.png	HEADSHOT	ckurtr5xe691680hsi8g678gt	\N
ckurtr4zj350780hsbx4ff1fb	2021-10-12 13:58:55.218	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201569.png	HEADSHOT	ckurtr5xg692380hs6wizok0c	\N
ckurtr4zl351480hs5w5ypegs	2021-10-12 13:58:55.22	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627734.png	HEADSHOT	ckurtr5xi693080hsj30og1ki	\N
ckurtr4zn352180hswqknttbf	2021-10-12 13:58:55.221	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203960.png	HEADSHOT	ckurtr5xk693780hs1jvj6935	\N
ckurtr4zr353580hstk50kyfc	2021-10-12 13:58:55.225	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627826.png	HEADSHOT	ckurtr5xo695180hs5f1hie8q	\N
ckurtr4zt354280hswvbtfnez	2021-10-12 13:58:55.226	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203076.png	HEADSHOT	ckurtr5xr695880hsu9awvv0c	\N
ckurtr4zv354980hsr7jmvkr7	2021-10-12 13:58:55.229	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/2617.png	HEADSHOT	ckurtr6jw917080hszj3oecdo	\N
ckurtr4zw355680hsyur32ilp	2021-10-12 13:58:55.259	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629010.png	HEADSHOT	ckurtr5zj710580hsydmr99hf	\N
ckurtr4zy356380hs3j6zc7vt	2021-10-12 13:58:55.257	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629244.png	HEADSHOT	ckurtr61h728780hsg0s7wsk9	\N
ckurtr502357780hsjg83v5tc	2021-10-12 13:58:55.243	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627732.png	HEADSHOT	ckurtr624735080hsi8a4xzw2	\N
ckurtr504358480hstpvgm98k	2021-10-12 13:58:55.244	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203552.png	HEADSHOT	ckurtr626735780hscrmwdsi8	\N
ckurtr506359180hsvn5x6qo3	2021-10-12 13:58:55.245	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/101108.png	HEADSHOT	ckurtr629736480hs27x32t3h	\N
ckurtr508359880hsyqjzztam	2021-10-12 13:58:55.247	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629713.png	HEADSHOT	ckurtr62f738580hstgysu8h7	\N
ckurtr50a360580hsnyo6t8uh	2021-10-12 13:58:55.248	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629640.png	HEADSHOT	ckurtr62k739980hsmq6enrg0	\N
ckurtr50d361280hsr4gzxmxu	2021-10-12 13:58:55.25	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629677.png	HEADSHOT	ckurtr6k0918480hs2n4d4rwd	\N
ckurtr50h362680hstnwvjxmh	2021-10-12 13:58:55.253	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/200768.png	HEADSHOT	ckurtr62s742780hs1crgq5zq	\N
ckurtr50k363380hskfn13qfm	2021-10-12 13:58:55.255	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203903.png	HEADSHOT	ckurtr62u743480hsslxs7ohg	\N
ckurtr50o364080hsnoqyqbn6	2021-10-12 13:58:55.256	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629744.png	HEADSHOT	ckurtr62y744880hssfdjbbbd	\N
ckurtr50q364780hsltbdl761	2021-10-12 13:58:55.201	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628369.png	HEADSHOT	ckurtr6d4839380hsclmhoodq	\N
ckurtr50s365480hs24tlly1o	2021-10-12 13:58:55.238	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629647.png	HEADSHOT	ckurtr6fn867380hsxcnxfd6q	\N
ckurtr50u366180hsgxiwisnr	2021-10-12 13:58:55.254	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203382.png	HEADSHOT	ckurtr6ge876480hs6q2kix6a	\N
ckurtr50z367580hs7z4drfoo	2021-10-12 13:58:55.264	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628455.png	HEADSHOT	ckurtr5zq711980hshp8ai379	\N
ckurtr512368280hszisivihh	2021-10-12 13:58:55.265	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630208.png	HEADSHOT	ckurtr6id898880hs0qpd6tfw	\N
ckurtr518369680hs1rzj2aw1	2021-10-12 13:58:55.269	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627827.png	HEADSHOT	ckurtr600714780hsosfw492f	\N
ckurtr51a370380hsetf4yj8o	2021-10-12 13:58:55.27	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203501.png	HEADSHOT	ckurtr6if899580hsr84smgel	\N
ckurtr51c371080hsh1t2p3m4	2021-10-12 13:58:55.271	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630207.png	HEADSHOT	ckurtr6ih900280hs07d2bcil	\N
ckurtr51e371780hs70zcr6b4	2021-10-12 13:58:55.272	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628467.png	HEADSHOT	ckurtr6ij900980hsm054e7ck	\N
ckurtr51i373180hsjrjv5bgw	2021-10-12 13:58:55.274	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630192.png	HEADSHOT	ckurtr605716180hsvof17suo	\N
ckurtr51k373880hswt3tte44	2021-10-12 13:58:55.277	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630180.png	HEADSHOT	ckurtr60a717580hsyw4rc6lo	\N
ckurtr51n374580hs731v3gcg	2021-10-12 13:58:55.278	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629635.png	HEADSHOT	ckurtr60d718280hsztggiu2g	\N
ckurtr51p375280hsp9u9e7s4	2021-10-12 13:58:55.279	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629686.png	HEADSHOT	ckurtr60g718980hsgo4b4dgh	\N
ckurtr51s375980hshitmwfaq	2021-10-12 13:58:55.28	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630185.png	HEADSHOT	ckurtr60j719680hsgez13a5d	\N
ckurtr51u376680hsjxsfvr7o	2021-10-12 13:58:55.281	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630164.png	HEADSHOT	ckurtr60m720380hsp17437ma	\N
ckurtr51y378080hseakn0c48	2021-10-12 13:58:55.284	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630256.png	HEADSHOT	ckurtr60t722480hsltf7fph3	\N
ckurtr520378780hs5ipvi83x	2021-10-12 13:58:55.286	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630237.png	HEADSHOT	ckurtr60v723180hss6dsw5xj	\N
ckurtr523379480hs4kd918hs	2021-10-12 13:58:55.287	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630199.png	HEADSHOT	ckurtr60y723880hst3xzp7f9	\N
ckurtr525380180hs0fumlt03	2021-10-12 13:58:55.288	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627747.png	HEADSHOT	ckurtr611724580hsqmte2f1s	\N
ckurtr527380880hsahx7mrww	2021-10-12 13:58:55.29	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201586.png	HEADSHOT	ckurtr614725280hsr5g9flrd	\N
ckurtr529381580hsn4ka9mst	2021-10-12 13:58:55.292	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628398.png	HEADSHOT	ckurtr618726680hsatxcvj7u	\N
ckurtr52c382980hsfecux84v	2021-10-12 13:58:55.294	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202693.png	HEADSHOT	ckurtr61e728080hsvbnat3ur	\N
ckurtr52e383680hsmo2ta5mv	2021-10-12 13:58:55.295	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630214.png	HEADSHOT	ckurtr61l729480hsbp4anek5	\N
ckurtr52g384380hsyw8ol5cy	2021-10-12 13:58:55.296	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626145.png	HEADSHOT	ckurtr61n730180hsgfp053ce	\N
ckurtr52i385080hs7elvgy0g	2021-10-12 13:58:55.297	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201609.png	HEADSHOT	ckurtr61q730880hskn2dw9jj	\N
ckurtr52k385780hsqwdfom1j	2021-10-12 13:58:55.301	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629021.png	HEADSHOT	ckurtr620733680hst7dh4wg2	\N
ckurtr52o387180hshfsgo6wz	2021-10-12 13:58:55.302	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628963.png	HEADSHOT	ckurtr62h739280hs1j9czakp	\N
ckurtr52q387880hsnclpq61c	2021-10-12 13:58:55.303	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203084.png	HEADSHOT	ckurtr6ky928280hsw00s26yo	\N
ckurtr52s388580hsz441q44e	2021-10-12 13:58:55.304	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201942.png	HEADSHOT	ckurtr62o741380hs909webho	\N
ckurtr52t389280hspkf5qgxf	2021-10-12 13:58:55.305	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/204060.png	HEADSHOT	ckurtr62w744180hs3n6v08xw	\N
ckurtr52v389980hsn0srwyrg	2021-10-12 13:58:55.306	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201144.png	HEADSHOT	ckurtr65i772180hsk4o7lfb1	\N
ckurtr52x390680hsfsaqmiy9	2021-10-12 13:58:55.308	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627777.png	HEADSHOT	ckurtr65z773580hsoqfzhkj5	\N
ckurtr531392080hs3tfe2j1k	2021-10-12 13:58:55.263	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629185.png	HEADSHOT	ckurtr6d8840780hsq6dum4v2	\N
ckurtr533392780hs6yhm8lci	2021-10-12 13:58:55.275	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202329.png	HEADSHOT	ckurtr6dl844280hsswbtcmrt	\N
ckurtr535393480hsycdoa0ph	2021-10-12 13:58:55.289	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630206.png	HEADSHOT	ckurtr6f2861080hsdxngc03a	\N
ckurtr53a394180hshqrc4i4y	2021-10-12 13:58:55.309	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202711.png	HEADSHOT	ckurtr6gi877880hsoug6d6o9	\N
ckurtr53h394880hsobkxn985	2021-10-12 13:58:55.26	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629027.png	HEADSHOT	ckurtr6jq914980hsnupiaax4	\N
ckurtr53l395580hs29r985rb	2021-10-12 13:58:55.315	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629725.png	HEADSHOT	ckurtr630745580hsur7ajarf	\N
ckurtr53s396980hs638s8nxt	2021-10-12 13:58:55.317	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627885.png	HEADSHOT	ckurtr632746280hs8tfakdq0	\N
ckurtr53v397680hsrttpa997	2021-10-12 13:58:55.368	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630165.png	HEADSHOT	ckurtr6iq903080hsu61pmatd	\N
ckurtr53z398380hswiz9rt57	2021-10-12 13:58:55.32	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628395.png	HEADSHOT	ckurtr636747680hssx789pqb	\N
ckurtr542399080hs5sxk0t97	2021-10-12 13:58:55.322	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629717.png	HEADSHOT	ckurtr6iu904480hsbs9yrqik	\N
ckurtr546399780hswso8rirp	2021-10-12 13:58:55.354	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629017.png	HEADSHOT	ckurtr638748380hsvgex3bxk	\N
ckurtr549400480hsgakap995	2021-10-12 13:58:55.356	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629052.png	HEADSHOT	ckurtr63b749080hs17wryu74	\N
ckurtr54h401880hs6thkp5nw	2021-10-12 13:58:55.359	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202326.png	HEADSHOT	ckurtr63i751180hsmphclp1x	\N
ckurtr54j402580hsme1175z1	2021-10-12 13:58:55.362	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/204025.png	HEADSHOT	ckurtr63n752580hsjdyahm49	\N
ckurtr54o403980hsmh2tuf0j	2021-10-12 13:58:55.364	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630217.png	HEADSHOT	ckurtr63r753980hscqulpc0u	\N
ckurtr54r404680hs6qxkyp7b	2021-10-12 13:58:55.365	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630253.png	HEADSHOT	ckurtr6k2919180hsh6952rva	\N
ckurtr54t405380hszwgkqk8i	2021-10-12 13:58:55.366	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630173.png	HEADSHOT	ckurtr63u754680hs5h510ka8	\N
ckurtr54v406080hsab8hz0ba	2021-10-12 13:58:55.367	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203473.png	HEADSHOT	ckurtr63w755380hs3o6g6yva	\N
ckurtr54y406780hsxwmt5re4	2021-10-12 13:58:55.372	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629091.png	HEADSHOT	ckurtr641756780hsox4bsfg5	\N
ckurtr552408180hsx6qquxlk	2021-10-12 13:58:55.374	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629670.png	HEADSHOT	ckurtr647758180hs1mwtm9lu	\N
ckurtr554408880hs489ao4sw	2021-10-12 13:58:55.375	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630241.png	HEADSHOT	ckurtr6l0928980hsdiu84j38	\N
ckurtr556409580hswdduvzh6	2021-10-12 13:58:55.376	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201950.png	HEADSHOT	ckurtr6l2929680hsihs2slgm	\N
ckurtr558410280hsuoayrair	2021-10-12 13:58:55.379	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630183.png	HEADSHOT	ckurtr64b759580hsj5eb2xh6	\N
ckurtr55a410980hso7kqevbh	2021-10-12 13:58:55.39	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629633.png	HEADSHOT	ckurtr64e760280hsc60kqwn8	\N
ckurtr55f412380hszenfgdnk	2021-10-12 13:58:55.381	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629712.png	HEADSHOT	ckurtr64i761680hse0nvzt6e	\N
ckurtr55h413080hsi4l56iqf	2021-10-12 13:58:55.383	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630230.png	HEADSHOT	ckurtr64k762380hsclczwow1	\N
ckurtr55j413780hsgzhianfa	2021-10-12 13:58:55.384	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630184.png	HEADSHOT	ckurtr64n763080hsvn20w4dx	\N
ckurtr55l414480hso7qxkklu	2021-10-12 13:58:55.388	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629607.png	HEADSHOT	ckurtr64r764480hsq3z1428z	\N
ckurtr55o415180hs90nc3ujv	2021-10-12 13:58:55.391	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629033.png	HEADSHOT	ckurtr64t765180hs8vgmc8dr	\N
ckurtr55q415880hscqu47f74	2021-10-12 13:58:55.392	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629004.png	HEADSHOT	ckurtr64w765880hs80kerrnw	\N
ckurtr55u417280hsyo2tghtg	2021-10-12 13:58:55.395	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630181.png	HEADSHOT	ckurtr650767280hsw006386r	\N
ckurtr55w417980hsqz2hum1b	2021-10-12 13:58:55.397	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626184.png	HEADSHOT	ckurtr652767980hsa0ijsnx7	\N
ckurtr55z418680hsfe4bfgr9	2021-10-12 13:58:55.312	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202397.png	HEADSHOT	ckurtr6k5919880hsfv68t4ix	\N
ckurtr561419380hss2k2l8l5	2021-10-12 13:58:55.313	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203458.png	HEADSHOT	ckurtr6ka921280hsii7a68pf	\N
ckurtr565420080hsu0z1wmks	2021-10-12 13:58:55.314	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202722.png	HEADSHOT	ckurtr6kc921980hs4vxxzt3w	\N
ckurtr567420780hsm3eo3a1k	2021-10-12 13:58:55.321	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629308.png	HEADSHOT	ckurtr6eu858980hs99au3nl6	\N
ckurtr56d422180hs05gpbr1n	2021-10-12 13:58:55.382	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629638.png	HEADSHOT	ckurtr6fg865280hsshkp1wvj	\N
ckurtr56g422880hswyjnmedi	2021-10-12 13:58:55.389	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630193.png	HEADSHOT	ckurtr6gp880680hs1kb70zcm	\N
ckurtr56i423580hspvxzt96k	2021-10-12 13:58:55.394	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203487.png	HEADSHOT	ckurtr6kt926880hsvd6flbuq	\N
ckurtr56l424280hsdsfp4hzr	2021-10-12 13:58:55.42	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630233.png	HEADSHOT	ckurtr6e1849880hs175c5tjj	\N
ckurtr56n424980hsy0vdz8xe	2021-10-12 13:58:55.411	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202687.png	HEADSHOT	ckurtr5zt712680hsfjanmy9g	\N
ckurtr56r426380hs4uge2n4y	2021-10-12 13:58:55.41	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629645.png	HEADSHOT	ckurtr6is903780hsa8etv6jk	\N
ckurtr56t427080hs1mcy8pyp	2021-10-12 13:58:55.409	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202694.png	HEADSHOT	ckurtr63g750480hsvfepykb8	\N
ckurtr56v427780hs5fcaphh2	2021-10-12 13:58:55.399	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628470.png	HEADSHOT	ckurtr656769380hsi6xx1ojq	\N
ckurtr56x428480hszq77zchq	2021-10-12 13:58:55.4	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/2546.png	HEADSHOT	ckurtr659770080hsh8ut3nzm	\N
ckurtr570429180hss3h47plt	2021-10-12 13:58:55.401	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629056.png	HEADSHOT	ckurtr65e770780hshg2cjppf	\N
ckurtr572429880hs7epjkfy1	2021-10-12 13:58:55.403	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627761.png	HEADSHOT	ckurtr65g771480hsujvgm0fv	\N
ckurtr576431280hspivlnov0	2021-10-12 13:58:55.406	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629655.png	HEADSHOT	ckurtr6k7920580hs9xz8t0qr	\N
ckurtr578431980hs8uq792wi	2021-10-12 13:58:55.441	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203992.png	HEADSHOT	ckurtr6ea852680hszgdaiv71	\N
ckurtr57a432680hsduwk7sci	2021-10-12 13:58:55.449	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629057.png	HEADSHOT	ckurtr6iy905880hsa711so5s	\N
ckurtr57c433380hsis6b3qwr	2021-10-12 13:58:55.437	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629013.png	HEADSHOT	ckurtr67c777780hstpxm5cme	\N
ckurtr57e434080hsil7dbrc3	2021-10-12 13:58:55.439	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201152.png	HEADSHOT	ckurtr67m780580hsn0o0mtq4	\N
ckurtr57g434780hsa2860jkz	2021-10-12 13:58:55.408	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630210.png	HEADSHOT	ckurtr67v783380hsgvd67wsc	\N
ckurtr57k436180hsivb7q2ho	2021-10-12 13:58:55.415	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627812.png	HEADSHOT	ckurtr68h789680hsm8ied7ny	\N
ckurtr57m436880hs724oj2pw	2021-10-12 13:58:55.433	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203507.png	HEADSHOT	ckurtr68m791080hsrbiuzrlq	\N
ckurtr57q438280hs7fq0fn1q	2021-10-12 13:58:55.431	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626195.png	HEADSHOT	ckurtr68s793180hsk4n66diq	\N
ckurtr57s438980hsdfmdvs8u	2021-10-12 13:58:55.443	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629658.png	HEADSHOT	ckurtr68y794580hseyiyo3qa	\N
ckurtr57u439680hskvjc8opt	2021-10-12 13:58:55.417	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628414.png	HEADSHOT	ckurtr690795280hsetbbrxrc	\N
ckurtr57w440380hsm2jlvg0w	2021-10-12 13:58:55.44	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629649.png	HEADSHOT	ckurtr693795980hsvcxhi2hh	\N
ckurtr57z441780hsyaznktsj	2021-10-12 13:58:55.416	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201229.png	HEADSHOT	ckurtr6lw938780hs1v4y3v9b	\N
ckurtr581442480hs1ej4vfwp	2021-10-12 13:58:55.444	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628975.png	HEADSHOT	ckurtr69b798080hsl9w2y61c	\N
ckurtr583443180hsdjnnt795	2021-10-12 13:58:55.423	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629642.png	HEADSHOT	ckurtr69g799480hsva0en72h	\N
ckurtr585443880hsp6wjxy2q	2021-10-12 13:58:55.427	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628388.png	HEADSHOT	ckurtr69i800180hsxmh9qnhg	\N
ckurtr587444580hsd4jzzwpk	2021-10-12 13:58:55.421	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626181.png	HEADSHOT	ckurtr6ln935980hs2409vi9c	\N
ckurtr589445280hsdf8rc9ki	2021-10-12 13:58:55.429	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630169.png	HEADSHOT	ckurtr69n801580hs1a9x2zp5	\N
ckurtr58c446680hs982xyy9u	2021-10-12 13:58:55.425	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629663.png	HEADSHOT	ckurtr69s802980hsw08zjizf	\N
ckurtr58e447380hs92aga9xj	2021-10-12 13:58:55.422	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203476.png	HEADSHOT	ckurtr69u803680hsfqz9858e	\N
ckurtr58g448080hs7hp44510	2021-10-12 13:58:55.428	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630273.png	HEADSHOT	ckurtr69x804380hs69sdu62a	\N
ckurtr58i448780hszghqpbjm	2021-10-12 13:58:55.432	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628449.png	HEADSHOT	ckurtr6a0805080hswa7umy7i	\N
ckurtr58k449480hsklhl3180	2021-10-12 13:58:55.424	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630258.png	HEADSHOT	ckurtr6a2805780hsqhrojsh2	\N
ckurtr58m450180hskp9mtgz5	2021-10-12 13:58:55.434	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628418.png	HEADSHOT	ckurtr6a4806480hsealpiou1	\N
ckurtr58q451580hss5m0qwv3	2021-10-12 13:58:55.426	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201566.png	HEADSHOT	ckurtr6gl879280hss9nz7qzw	\N
ckurtr58s452280hsfzpg4mwl	2021-10-12 13:58:55.435	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201568.png	HEADSHOT	ckurtr6jo914280hs1olbpuqg	\N
ckurtr58v452980hsm3s2k4pf	2021-10-12 13:58:55.469	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630168.png	HEADSHOT	ckurtr6ec853380hsg20jeui7	\N
ckurtr58x453680hsedf1pgnk	2021-10-12 13:58:55.458	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203953.png	HEADSHOT	ckurtr677776380hsbtrysh56	\N
ckurtr590454380hsu36cjfp5	2021-10-12 13:58:55.457	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629641.png	HEADSHOT	ckurtr6j0906580hsdftgqfno	\N
ckurtr595455780hst7iuuak2	2021-10-12 13:58:55.459	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629667.png	HEADSHOT	ckurtr67h779180hs8k3ab0gr	\N
ckurtr597456480hsn4hq9eml	2021-10-12 13:58:55.474	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630203.png	HEADSHOT	ckurtr67k779880hs5bolc8w8	\N
ckurtr59a457180hs1re9c5k0	2021-10-12 13:58:55.454	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627756.png	HEADSHOT	ckurtr67p781280hsqqrk1xtg	\N
ckurtr59d457880hs3it2sqp6	2021-10-12 13:58:55.475	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627752.png	HEADSHOT	ckurtr67r781980hs8z4yg220	\N
ckurtr59f458580hs7n9cxm9b	2021-10-12 13:58:55.46	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203521.png	HEADSHOT	ckurtr67t782680hs8mjmstlw	\N
ckurtr59i459280hsl6pb6eyt	2021-10-12 13:58:55.456	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203085.png	HEADSHOT	ckurtr680784780hs5t2dwxph	\N
ckurtr59m460680hsli0sfk3s	2021-10-12 13:58:55.453	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203952.png	HEADSHOT	ckurtr688786880hs10jc2r2t	\N
ckurtr59o461380hs6gky1czm	2021-10-12 13:58:55.465	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/204456.png	HEADSHOT	ckurtr68a787580hsrkvdx5vx	\N
ckurtr59r462080hserzxb0ex	2021-10-12 13:58:55.471	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626167.png	HEADSHOT	ckurtr68d788280hslm6xpykz	\N
ckurtr59u462780hspoiyi823	2021-10-12 13:58:55.461	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201587.png	HEADSHOT	ckurtr6j2907280hsspigp6bu	\N
ckurtr59w463480hs81nthc5i	2021-10-12 13:58:55.45	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628978.png	HEADSHOT	ckurtr68j790380hsf9tqs444	\N
ckurtr59y464180hsotqmc3n6	2021-10-12 13:58:55.472	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628365.png	HEADSHOT	ckurtr6ke922680hs36mvfgzd	\N
ckurtr5a3465580hsjvie27tg	2021-10-12 13:58:55.468	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203496.png	HEADSHOT	ckurtr69k800880hs57u9ev24	\N
ckurtr5a5466280hsfjbye76v	2021-10-12 13:58:55.486	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202684.png	HEADSHOT	ckurtr6a6807180hswxpgr0f2	\N
ckurtr5a7466980hs667lmf8p	2021-10-12 13:58:55.47	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629651.png	HEADSHOT	ckurtr6j6908680hshg7zv646	\N
ckurtr5a9467680hshht4kyb2	2021-10-12 13:58:55.49	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626162.png	HEADSHOT	ckurtr6ap812780hswkwro28b	\N
ckurtr5ac468380hsp47lbys7	2021-10-12 13:58:55.487	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627863.png	HEADSHOT	ckurtr6au814180hsonrvpx0r	\N
ckurtr5ae469080hsia683ynk	2021-10-12 13:58:55.497	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626174.png	HEADSHOT	ckurtr6aw814880hstqwsvqv0	\N
ckurtr5ai470480hsrui2fejq	2021-10-12 13:58:55.482	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629007.png	HEADSHOT	ckurtr6b9819080hsp90yle7r	\N
ckurtr5al471180hs5shm33wv	2021-10-12 13:58:55.476	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628991.png	HEADSHOT	ckurtr6bb819780hsi5jla77y	\N
ckurtr5aq472580hs9denrry8	2021-10-12 13:58:55.498	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629723.png	HEADSHOT	ckurtr6kj924080hssc23dzbp	\N
ckurtr5as473280hsqh3vb2mh	2021-10-12 13:58:55.492	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629603.png	HEADSHOT	ckurtr6bo823980hs6mv47691	\N
ckurtr5b2473980hskjftunlx	2021-10-12 13:58:55.493	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630492.png	HEADSHOT	ckurtr6bq824680hselmin5ao	\N
ckurtr5bc474680hs4kc88umk	2021-10-12 13:58:55.485	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630266.png	HEADSHOT	ckurtr6bv826080hs8ibik6wj	\N
ckurtr5bj476080hspqk4hcha	2021-10-12 13:58:55.478	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628380.png	HEADSHOT	ckurtr6cf831680hsywfkausj	\N
ckurtr5bq476780hs1f605tzs	2021-10-12 13:58:55.495	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629022.png	HEADSHOT	ckurtr6cm833780hs3xrd58h7	\N
ckurtr5bt477480hsr0ovtfm2	2021-10-12 13:58:55.479	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626169.png	HEADSHOT	ckurtr6cv836580hsg7synvst	\N
ckurtr5bw478180hshxejn7cg	2021-10-12 13:58:55.489	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629067.png	HEADSHOT	ckurtr6cy837280hs7hotli9t	\N
ckurtr5bz478880hs20whyoqs	2021-10-12 13:58:55.452	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627759.png	HEADSHOT	ckurtr6d6840080hsn0euou74	\N
ckurtr5c2479580hsmidg09nj	2021-10-12 13:58:55.466	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626159.png	HEADSHOT	ckurtr6f5861780hsjdkq0y4o	\N
ckurtr5c8480980hsumrf2233	2021-10-12 13:58:55.494	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628983.png	HEADSHOT	ckurtr6lu938080hshr0mgdhy	\N
ckurtr5cb481680hsddh2mdxd	2021-10-12 13:58:55.524	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628989.png	HEADSHOT	ckurtr6e6851280hsigaj5uez	\N
ckurtr5ce482380hse6ql7e14	2021-10-12 13:58:55.512	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630202.png	HEADSHOT	ckurtr674775680hs83i0hlrj	\N
ckurtr5cg483080hsbljazlvk	2021-10-12 13:58:55.517	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628436.png	HEADSHOT	ckurtr6j4907980hso1a5379g	\N
ckurtr5cj483780hsicevr0ab	2021-10-12 13:58:55.502	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201142.png	HEADSHOT	ckurtr6a9807880hsfjcmcjws	\N
ckurtr5cl484480hsx0q681jo	2021-10-12 13:58:55.507	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202696.png	HEADSHOT	ckurtr6ja910080hs988kcjrq	\N
ckurtr5cq485880hsa38zzhl1	2021-10-12 13:58:55.538	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626204.png	HEADSHOT	ckurtr6jd910780hsauv7kclv	\N
ckurtr5cu486580hsgnft1k4i	2021-10-12 13:58:55.504	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628973.png	HEADSHOT	ckurtr6ad809280hs4ut3qqtw	\N
ckurtr5cx487280hscp8zln2s	2021-10-12 13:58:55.513	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628367.png	HEADSHOT	ckurtr6af809980hsebge0ebi	\N
ckurtr5d0487980hso0j6mkmq	2021-10-12 13:58:55.532	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630191.png	HEADSHOT	ckurtr6ai810680hs3wvu3ne2	\N
ckurtr5d3488680hsskwxlse5	2021-10-12 13:58:55.526	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628021.png	HEADSHOT	ckurtr6ar813480hszw26sqhm	\N
ckurtr5d8490080hs0m0gz442	2021-10-12 13:58:55.509	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629048.png	HEADSHOT	ckurtr6b0816280hsfpjx6vz7	\N
ckurtr5db490780hs9mtems8h	2021-10-12 13:58:55.514	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202335.png	HEADSHOT	ckurtr6b2816980hsr52cw8mn	\N
ckurtr5dd491480hsjgjcuwol	2021-10-12 13:58:55.539	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628961.png	HEADSHOT	ckurtr6b7818380hsn7xsr7nv	\N
ckurtr5dg492180hs97wxi239	2021-10-12 13:58:55.51	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629134.png	HEADSHOT	ckurtr6bf821180hs1xggzj7v	\N
ckurtr5dj492880hsdi109egd	2021-10-12 13:58:55.527	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201952.png	HEADSHOT	ckurtr6bj822580hsz0rxfnv6	\N
ckurtr5dn493580hs5h0u0nbw	2021-10-12 13:58:55.519	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203114.png	HEADSHOT	ckurtr6bl823280hsy8xljjp6	\N
ckurtr5dt494980hsyv970bmy	2021-10-12 13:58:55.51	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628373.png	HEADSHOT	ckurtr6bt825380hsb87684z9	\N
ckurtr5dw495680hshpy8kvir	2021-10-12 13:58:55.515	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629660.png	HEADSHOT	ckurtr6c0827480hsgw0ium2s	\N
ckurtr5dz496380hswcqsyv2j	2021-10-12 13:58:55.505	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628371.png	HEADSHOT	ckurtr6c5828880hsetp4a1i6	\N
ckurtr5e1497080hsxw81qxzi	2021-10-12 13:58:55.528	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626164.png	HEADSHOT	ckurtr6ca830280hsrez833kg	\N
ckurtr5e4497780hs30rt9nan	2021-10-12 13:58:55.52	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626163.png	HEADSHOT	ckurtr6cd830980hs9jprdiyc	\N
ckurtr5e7498480hsz0i3243h	2021-10-12 13:58:55.506	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630186.png	HEADSHOT	ckurtr6ci832380hs8xxsevdk	\N
ckurtr5ed499880hskmlyuhq9	2021-10-12 13:58:55.523	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629683.png	HEADSHOT	ckurtr6co834480hsut99pflb	\N
ckurtr5el500580hsdqizv259	2021-10-12 13:58:55.537	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627751.png	HEADSHOT	ckurtr6kl924780hs5pe7zpob	\N
ckurtr5eo501280hsf4di75c0	2021-10-12 13:58:55.511	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628384.png	HEADSHOT	ckurtr6ct835880hsyruombxv	\N
ckurtr5er501980hshgvu3x05	2021-10-12 13:58:55.546	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203524.png	HEADSHOT	ckurtr6eg854780hsqjggohnj	\N
ckurtr5eu502680hsxlemyo4a	2021-10-12 13:58:55.53	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201599.png	HEADSHOT	ckurtr6db841480hspdpv9a63	\N
ckurtr5ew503380hsgy5dsdy0	2021-10-12 13:58:55.553	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629690.png	HEADSHOT	ckurtr6dn844980hsrurbo1l1	\N
ckurtr5f1504780hsrsdza30n	2021-10-12 13:58:55.508	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203486.png	HEADSHOT	ckurtr6eq857580hsiqzrnu2b	\N
ckurtr5f4505480hs25wbnkbl	2021-10-12 13:58:55.535	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628415.png	HEADSHOT	ckurtr6kn925480hskjqoi3bj	\N
ckurtr5fc507580hsnih4hkhv	2021-10-12 13:58:55.549	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203516.png	HEADSHOT	ckurtr6fp868080hsplny36wp	\N
ckurtr5fe508280hs5jkgy9gn	2021-10-12 13:58:55.543	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629833.png	HEADSHOT	ckurtr6g6873680hsr2higd0p	\N
ckurtr5fg508980hs7wr27e4i	2021-10-12 13:58:55.548	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/101141.png	HEADSHOT	ckurtr6gk878580hscebfqs4q	\N
ckurtr5fj509680hsm0dfo5xn	2021-10-12 13:58:55.544	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629631.png	HEADSHOT	ckurtr6js915680hsdlpq236f	\N
ckurtr5fl510380hsufq9rti6	2021-10-12 13:58:54.65	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612737.svg	LOGO	\N	ckurtr71v1111680hso3ir0d8j
ckurtr5fn511080hsdybt8or6	2021-10-12 13:58:54.654	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612766.svg	LOGO	\N	ckurtr7311113780hsgrdqiegk
ckurtr5fs512480hsclze835m	2021-10-12 13:58:54.619	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612763.svg	LOGO	\N	ckurtr73w1121480hs5q03bem0
ckurtr5fu513180hsz2v9z2sr	2021-10-12 13:58:54.625	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612752.svg	LOGO	\N	ckurtr74b1124980hs9jiumudw
ckurtr5fx513880hs5vev34rx	2021-10-12 13:58:54.616	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612757.svg	LOGO	\N	ckurtr74o1128480hsw91nsqm0
ckurtr5fz514580hsnsnv9lob	2021-10-12 13:58:54.61	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612764.svg	LOGO	\N	ckurtr7501131980hsxu0tclct
ckurtr5g3515980hs32ug7cw3	2021-10-12 13:58:54.95	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628400.png	HEADSHOT	ckurtr5lz577580hs8gf7hfgo	\N
ckurtr5g5516680hszloy7i52	2021-10-12 13:58:54.959	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628370.png	HEADSHOT	ckurtr5mf581780hs9qym74cd	\N
ckurtr5g8517380hsmt6di0bz	2021-10-12 13:58:54.966	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629632.png	HEADSHOT	ckurtr5mj583180hsnexavzdb	\N
ckurtr5ga518080hsuqmhcwth	2021-10-12 13:58:55.008	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203107.png	HEADSHOT	ckurtr5mr585280hs89tqb7od	\N
ckurtr5gc518780hsonab3erm	2021-10-12 13:58:54.975	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203939.png	HEADSHOT	ckurtr5n6589480hs49gc0lgh	\N
ckurtr5gf519480hsa639r7px	2021-10-12 13:58:54.979	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627750.png	HEADSHOT	ckurtr5nl593680hs4898qy70	\N
ckurtr5gk520880hs97giszws	2021-10-12 13:58:54.991	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630178.png	HEADSHOT	ckurtr5of602780hsmivmqvaj	\N
ckurtr5gm521580hstwxvepr6	2021-10-12 13:58:55.007	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626188.png	HEADSHOT	ckurtr5os606980hsaols43l4	\N
ckurtr5gp522280hsg8c4jsiq	2021-10-12 13:58:55.005	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630190.png	HEADSHOT	ckurtr5p6611880hsj8bpwpdk	\N
ckurtr5gr522980hsvxmzlru1	2021-10-12 13:58:55.446	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629164.png	HEADSHOT	ckurtr6dv847780hsuv5fiwuy	\N
ckurtr5gt523680hs1dpzn9ru	2021-10-12 13:58:55.199	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203503.png	HEADSHOT	ckurtr6dx848480hskv2h8q6j	\N
ckurtr5gy525080hs3pk650mc	2021-10-12 13:58:55.205	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630176.png	HEADSHOT	ckurtr5pa613280hsd0735cco	\N
ckurtr5h1525780hsf5pyezt7	2021-10-12 13:58:55.318	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627780.png	HEADSHOT	ckurtr5ph615380hs4ot9eqq9	\N
ckurtr5h4526480hs8e0og3g5	2021-10-12 13:58:55.03	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201162.png	HEADSHOT	ckurtr6ha887680hsx2gszq7s	\N
ckurtr5h6527180hsxvj392qd	2021-10-12 13:58:55.151	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629001.png	HEADSHOT	ckurtr5q3621680hsavfal9i7	\N
ckurtr5h8527880hssdknvdgv	2021-10-12 13:58:55.233	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629006.png	HEADSHOT	ckurtr6lh933880hsuj1z8nao	\N
ckurtr5ha528580hsz8gqlf47	2021-10-12 13:58:55.163	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203500.png	HEADSHOT	ckurtr5qn626580hsr6lllu0i	\N
ckurtr5hf529980hsfp3fzi3z	2021-10-12 13:58:55.171	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626166.png	HEADSHOT	ckurtr5rl636380hsjfae6i1l	\N
ckurtr5hi530680hsk2f5w5pm	2021-10-12 13:58:55.112	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626158.png	HEADSHOT	ckurtr5s7641280hs8kbbz194	\N
ckurtr5hl531380hs9pehqvex	2021-10-12 13:58:55.19	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629671.png	HEADSHOT	ckurtr5sk644080hs0tvd1xlf	\N
ckurtr5hn532080hs5hmlzgrl	2021-10-12 13:58:55.5	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203991.png	HEADSHOT	ckurtr6dz849180hsufo78459	\N
ckurtr5hp532780hsa052pyl8	2021-10-12 13:58:55.075	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630189.png	HEADSHOT	ckurtr5t6648280hslati77ow	\N
ckurtr5hr533480hsk9tiejay	2021-10-12 13:58:55.081	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203145.png	HEADSHOT	ckurtr5tm652480hs0s6ndeja	\N
ckurtr5hv534880hsqilu9vta	2021-10-12 13:58:55.091	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627936.png	HEADSHOT	ckurtr5uh660880hsqpgxzxcu	\N
ckurtr5hx535580hs4i9xz5nk	2021-10-12 13:58:55.035	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629639.png	HEADSHOT	ckurtr5up662980hsyvopbw1g	\N
ckurtr5i0536280hszifujhrq	2021-10-12 13:58:55.045	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628366.png	HEADSHOT	ckurtr5v8667880hs6lxcixlf	\N
ckurtr5i3536980hstpweavy9	2021-10-12 13:58:55.053	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203944.png	HEADSHOT	ckurtr5vn672080hsy082avm6	\N
ckurtr5i5537680hszzm31ygn	2021-10-12 13:58:55.062	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630216.png	HEADSHOT	ckurtr5w9678380hssxs47wpn	\N
ckurtr5ia539080hsctyork02	2021-10-12 13:58:55.556	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626178.png	HEADSHOT	ckurtr6g4872980hsogete698	\N
ckurtr5id539780hsrz8kfvo3	2021-10-12 13:58:55.203	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201145.png	HEADSHOT	ckurtr6i2896080hs1yoxp6eq	\N
ckurtr5if540480hskt06g14l	2021-10-12 13:58:55.132	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202066.png	HEADSHOT	ckurtr5sw646180hsrkf8a9rw	\N
ckurtr5ik541880hsc2ajs61b	2021-10-12 13:58:55.215	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201961.png	HEADSHOT	ckurtr5xa690280hsgwqszqp3	\N
ckurtr5im542580hsfegd9bnw	2021-10-12 13:58:55.224	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629611.png	HEADSHOT	ckurtr5xm694480hs179ofdx9	\N
ckurtr5io543280hscna0pw1k	2021-10-12 13:58:55.096	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628382.png	HEADSHOT	ckurtr5y8700080hs1kbgqjf5	\N
ckurtr5ir543980hs8n7knmhg	2021-10-12 13:58:55.186	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626168.png	HEADSHOT	ckurtr6jy917780hsez06l3w0	\N
ckurtr5it544680hsw9wp6fi9	2021-10-12 13:58:55.117	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203920.png	HEADSHOT	ckurtr5z4707080hscc8qlghh	\N
ckurtr5ix546080hszepzjp3m	2021-10-12 13:58:55.268	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630182.png	HEADSHOT	ckurtr5zy714080hsbkiyh7on	\N
ckurtr5iz546780hsw47dqzcj	2021-10-12 13:58:55.276	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630240.png	HEADSHOT	ckurtr608716880hsetuw94pw	\N
ckurtr5j3547480hsnjkvq50h	2021-10-12 13:58:55.283	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630231.png	HEADSHOT	ckurtr60q721780hs9doolcox	\N
ckurtr5j5548180hswz65lrtw	2021-10-12 13:58:55.291	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630187.png	HEADSHOT	ckurtr616725980hsl9lhdpvs	\N
ckurtr5j7548880hs53mqky79	2021-10-12 13:58:55.3	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628411.png	HEADSHOT	ckurtr61t731580hslljbeh84	\N
ckurtr5ja549580hsc7quz4cb	2021-10-12 13:58:55.235	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629117.png	HEADSHOT	ckurtr61v732280hsyviny4nb	\N
ckurtr5jf550980hsm909abq4	2021-10-12 13:58:55.249	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627749.png	HEADSHOT	ckurtr62m740680hsoey7f87c	\N
ckurtr5ji551680hsq72nnwbm	2021-10-12 13:58:55.307	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626220.png	HEADSHOT	ckurtr6m2940880hsrzaeuu0k	\N
ckurtr5jk552380hs6f5ixeth	2021-10-12 13:58:55.319	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626172.png	HEADSHOT	ckurtr634746980hszp862u2f	\N
ckurtr5jm553080hs6odiw7q2	2021-10-12 13:58:55.361	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203471.png	HEADSHOT	ckurtr63l751880hs5wnadq5r	\N
ckurtr5jo553780hsbsfr0v9w	2021-10-12 13:58:55.371	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630209.png	HEADSHOT	ckurtr63z756080hsh9h5ej94	\N
ckurtr5js555180hsll3pwja8	2021-10-12 13:58:55.377	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630162.png	HEADSHOT	ckurtr649758880hss79jugem	\N
ckurtr5jv555880hsxwwj3nww	2021-10-12 13:58:55.385	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203263.png	HEADSHOT	ckurtr64p763780hsyc2cfi0r	\N
ckurtr5jx556580hshqkauidl	2021-10-12 13:58:55.398	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628976.png	HEADSHOT	ckurtr654768680hs6se2n6ye	\N
ckurtr5k1557280hs4c5xp74b	2021-10-12 13:58:55.405	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628990.png	HEADSHOT	ckurtr66y774280hst03xc2o6	\N
ckurtr5k4557980hspx1cytv6	2021-10-12 13:58:55.554	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201143.png	HEADSHOT	ckurtr6iw905180hs7zurf906	\N
ckurtr5k6558680hskqxm2odi	2021-10-12 13:58:55.451	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628993.png	HEADSHOT	ckurtr67f778480hsilxgu85n	\N
ckurtr5ka560080hscn9rp9r1	2021-10-12 13:58:55.462	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630223.png	HEADSHOT	ckurtr682785480hs666xg500	\N
ckurtr5kd560780hs0srqdidk	2021-10-12 13:58:55.466	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202339.png	HEADSHOT	ckurtr68q792480hsaqg50h4g	\N
ckurtr5kg561480hscu96wdbf	2021-10-12 13:58:55.442	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203658.png	HEADSHOT	ckurtr68v793880hsy1yb7h6m	\N
ckurtr5ki562180hsgdkm1xs5	2021-10-12 13:58:55.414	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628969.png	HEADSHOT	ckurtr69d798780hs2tgujwd9	\N
ckurtr5kl562880hs3oij7zhx	2021-10-12 13:58:55.447	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629002.png	HEADSHOT	ckurtr6l7931080hsll8bv4kk	\N
ckurtr5kn563580hs60mhfpae	2021-10-12 13:58:55.503	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628972.png	HEADSHOT	ckurtr6j9909380hsupyi4y7s	\N
ckurtr5kr564980hsgqmvng3v	2021-10-12 13:58:55.481	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202691.png	HEADSHOT	ckurtr6am812080hsvgdvburb	\N
ckurtr5ku565680hsfx1pm85e	2021-10-12 13:58:55.48	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/200746.png	HEADSHOT	ckurtr6bd820480hs9trx2qse	\N
ckurtr5kw566380hsux5n4qvm	2021-10-12 13:58:55.54	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629622.png	HEADSHOT	ckurtr6bh821880hsv20dmk0t	\N
ckurtr5ky567080hsrqsxv794	2021-10-12 13:58:55.499	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629718.png	HEADSHOT	ckurtr6c2828180hsu3ugwe4c	\N
ckurtr5l0567780hsqf5xwggv	2021-10-12 13:58:55.477	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203954.png	HEADSHOT	ckurtr6c8829580hsp28mkscu	\N
ckurtr5l4569180hs9pjyvvxw	2021-10-12 13:58:55.208	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628386.png	HEADSHOT	ckurtr6jm913580hspvfvtped	\N
ckurtr5l6569880hs43152jac	2021-10-12 13:58:55.547	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630267.png	HEADSHOT	ckurtr6dt847080hsin9cl6nd	\N
ckurtr5l8570580hsr7kgyxup	2021-10-12 13:58:55.438	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628977.png	HEADSHOT	ckurtr6eo856880hswt4hd573	\N
ckurtr5la571280hseqi3ohu8	2021-10-12 13:58:55.024	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627763.png	HEADSHOT	ckurtr6ez860380hsnkys533p	\N
ckurtr5ld571980hs5y5ulwqh	2021-10-12 13:58:55.093	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/2772.png	HEADSHOT	ckurtr6f7862480hsd1xjqf1l	\N
ckurtr5lh572680hsbhpjqwcs	2021-10-12 13:58:55.037	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/2738.png	HEADSHOT	ckurtr6fa863180hstoncw2oo	\N
ckurtr5ll574080hs3s2tl3pt	2021-10-12 13:58:55.396	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203490.png	HEADSHOT	ckurtr6fr868780hss53orjji	\N
ckurtr5ln574780hs25sa3uyg	2021-10-12 13:58:55.484	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629680.png	HEADSHOT	ckurtr6fw870180hs3n7tj09c	\N
ckurtr460035780hstwdkn53r	2021-10-12 13:58:54.651	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612738.svg	LOGO	\N	ckurtr72t1112380hs8x0kp6w2
ckurtr465037180hs82eq62i7	2021-10-12 13:58:54.607	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612741.svg	LOGO	\N	ckurtr7341114480hs337eaj26
ckurtr46j040680hsoaf64pkr	2021-10-12 13:58:54.645	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612745.svg	LOGO	\N	ckurtr73k1118680hs60y14qgi
ckurtr471044880hskgqmur2o	2021-10-12 13:58:54.606	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612750.svg	LOGO	\N	ckurtr7441123580hswoadqvid
ckurtr47e048380hsmzqgvi61	2021-10-12 13:58:54.618	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612756.svg	LOGO	\N	ckurtr74l1127780hsxilzh94e
ckurtr4n3207280hsejzrrl9h	2021-10-12 13:58:54.952	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629682.png	HEADSHOT	ckurtr6gr881380hs2mmlbkgm	\N
ckurtr4nh211480hsj691bmr3	2021-10-12 13:58:54.961	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628984.png	HEADSHOT	ckurtr5mh582480hshbzdanyw	\N
ckurtr4nx216380hshcthb1qq	2021-10-12 13:58:54.969	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629685.png	HEADSHOT	ckurtr5mu585980hsjublgz28	\N
ckurtr4oc221280hsoc4iinu5	2021-10-12 13:58:54.948	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628383.png	HEADSHOT	ckurtr6d0837980hsw823ol49	\N
ckurtr4on225480hsmzzxg7g6	2021-10-12 13:58:55.012	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629626.png	HEADSHOT	ckurtr5nh592280hsz7bnbhfh	\N
ckurtr4p1230380hs7by82eyz	2021-10-12 13:58:54.985	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630197.png	HEADSHOT	ckurtr5o1598580hs4iffjvdo	\N
ckurtr4p5231780hsgypir9ql	2021-10-12 13:58:54.987	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629643.png	HEADSHOT	ckurtr5o6599980hs10578l5m	\N
ckurtr4ph235280hssawcvrjj	2021-10-12 13:58:54.992	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630198.png	HEADSHOT	ckurtr5ok604180hsv1klnmlx	\N
ckurtr4py240180hsbxpylk88	2021-10-12 13:58:55.001	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630200.png	HEADSHOT	ckurtr5p0609780hs76blwngx	\N
ckurtr4qe245080hs1rgq5qar	2021-10-12 13:58:55.021	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203482.png	HEADSHOT	ckurtr5tr653880hsq22lkrma	\N
ckurtr4qs249280hsoy39y6me	2021-10-12 13:58:55.006	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628390.png	HEADSHOT	ckurtr6d2838680hssu4hsamr	\N
ckurtr4r6254180hs13s2ls54	2021-10-12 13:58:55.073	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203925.png	HEADSHOT	ckurtr5t0646880hs80rr3459	\N
ckurtr4rj259080hsnkpuevo1	2021-10-12 13:58:55.082	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201939.png	HEADSHOT	ckurtr6hk890480hsb5aeqqcj	\N
ckurtr4rx263980hsz73c1mn8	2021-10-12 13:58:55.04	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626171.png	HEADSHOT	ckurtr5uu664380hsouo2ut6m	\N
ckurtr4s4266080hsyq2jum8t	2021-10-12 13:58:55.043	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629669.png	HEADSHOT	ckurtr5v2666480hsxsdhgw3t	\N
ckurtr4sg269580hsnmg2h9gu	2021-10-12 13:58:55.049	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202692.png	HEADSHOT	ckurtr5vi670680hsu3qtrhnm	\N
ckurtr4sx274480hsy19x8phv	2021-10-12 13:58:55.059	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628962.png	HEADSHOT	ckurtr5w6677680hst7rmc1rm	\N
ckurtr4td279380hsfwhztolz	2021-10-12 13:58:55.05	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629011.png	HEADSHOT	ckurtr6fj865980hsasei0c08	\N
ckurtr4tq283580hs1tn8zc6v	2021-10-12 13:58:55.1	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203901.png	HEADSHOT	ckurtr5qu628680hsb7ufz3iy	\N
ckurtr4u6288480hsig6vzyos	2021-10-12 13:58:55.114	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/200752.png	HEADSHOT	ckurtr5sd642680hs2qqyf3le	\N
ckurtr4ul293380hs3g7yfh9k	2021-10-12 13:58:55.126	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630163.png	HEADSHOT	ckurtr5wg680480hs27lawwx6	\N
ckurtr4v3298280hsi9ouofw8	2021-10-12 13:58:55.094	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629644.png	HEADSHOT	ckurtr5y2698680hsvu8h0in7	\N
ckurtr4vb300380hsus7ld5jj	2021-10-12 13:58:55.105	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627788.png	HEADSHOT	ckurtr5yi702180hspq3vzb1z	\N
ckurtr4vp304580hsazsxyfxl	2021-10-12 13:58:55.119	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629752.png	HEADSHOT	ckurtr5z8707780hslq7wp0wa	\N
ckurtr4w5309480hso4fcamrh	2021-10-12 13:58:55.196	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629738.png	HEADSHOT	ckurtr5pm616780hs94vj0xcl	\N
ckurtr4wh313680hsgmv23zr0	2021-10-12 13:58:55.157	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202710.png	HEADSHOT	ckurtr5qb623780hsatificfy	\N
ckurtr4wu318580hszgymimrl	2021-10-12 13:58:55.166	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202699.png	HEADSHOT	ckurtr5rc634280hsd2wxrybp	\N
ckurtr4x6322780hsswt9ynhz	2021-10-12 13:58:55.179	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628385.png	HEADSHOT	ckurtr5rt638480hsw3mz6jbk	\N
ckurtr4xj327680hsb94b7xyg	2021-10-12 13:58:55.14	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629740.png	HEADSHOT	ckurtr5x4688180hsgpgokucn	\N
ckurtr4xz332580hsa1us5c1c	2021-10-12 13:58:55.188	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629018.png	HEADSHOT	ckurtr6ly939480hsfdgaj999	\N
ckurtr4y6334680hsk9splb3o	2021-10-12 13:58:55.197	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630219.png	HEADSHOT	ckurtr6ee854080hs28xa3loj	\N
ckurtr4yl338880hsxypoqroa	2021-10-12 13:58:55.227	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203463.png	HEADSHOT	ckurtr5q1620980hsgldsict8	\N
ckurtr4yx343080hsqim822sn	2021-10-12 13:58:55.241	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627741.png	HEADSHOT	ckurtr6kv927580hsuqfynt6b	\N
ckurtr4zc347980hsxyrbs6wu	2021-10-12 13:58:55.213	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628392.png	HEADSHOT	ckurtr5x0686780hsphvxgz3e	\N
ckurtr4zp352880hsmor7oi8v	2021-10-12 13:58:55.223	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629103.png	HEADSHOT	ckurtr6ia898180hs30u3gjcd	\N
ckurtr500357080hsruf129b5	2021-10-12 13:58:55.237	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628995.png	HEADSHOT	ckurtr61y732980hsfej3gyux	\N
ckurtr5ls576180hsyrmgvkep	2021-10-12 13:58:55.545	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629714.png	HEADSHOT	ckurtr6gg877180hsxnjszlei	\N
ckurtr50f361980hsb4zgsy1h	2021-10-12 13:58:55.252	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628778.png	HEADSHOT	ckurtr62q742080hstava70a6	\N
ckurtr50x366880hsmr4jhgdm	2021-10-12 13:58:55.262	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629650.png	HEADSHOT	ckurtr5zm711280hsb6f55njp	\N
ckurtr515368980hs6eg7h6r4	2021-10-12 13:58:55.266	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203504.png	HEADSHOT	ckurtr5zv713380hsc3mttpx4	\N
ckurtr51g372480hsd7zblvbk	2021-10-12 13:58:55.273	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203999.png	HEADSHOT	ckurtr602715480hsr2kyxjg6	\N
ckurtr51w377380hswk3fbadq	2021-10-12 13:58:55.282	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202322.png	HEADSHOT	ckurtr60o721080hspe6ebhmn	\N
ckurtr52b382280hspn8twv4c	2021-10-12 13:58:55.293	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201188.png	HEADSHOT	ckurtr61b727380hsjgrg06e3	\N
ckurtr52m386480hsnu3wxasw	2021-10-12 13:58:55.299	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201980.png	HEADSHOT	ckurtr622734380hs3ijn3g91	\N
ckurtr52z391380hst7e0vkqg	2021-10-12 13:58:55.31	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203078.png	HEADSHOT	ckurtr671774980hsi5okixau	\N
ckurtr53o396280hs763g8h2k	2021-10-12 13:58:55.316	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626246.png	HEADSHOT	ckurtr6io902380hspid81kkh	\N
ckurtr54d401180hsfze38cci	2021-10-12 13:58:55.358	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628578.png	HEADSHOT	ckurtr63d749780hsrxppqgwu	\N
ckurtr54m403280hs018vrcp2	2021-10-12 13:58:55.363	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202685.png	HEADSHOT	ckurtr63p753280hsfbp478b5	\N
ckurtr550407480hsysb7lssd	2021-10-12 13:58:55.373	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627854.png	HEADSHOT	ckurtr644757480hsmud9nh5g	\N
ckurtr55d411680hsi5mvppwy	2021-10-12 13:58:55.38	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626157.png	HEADSHOT	ckurtr64g760980hsd7738j7d	\N
ckurtr55s416580hs39pfjw2v	2021-10-12 13:58:55.393	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630221.png	HEADSHOT	ckurtr64y766580hsjsce9j0g	\N
ckurtr56a421480hs81qdtawm	2021-10-12 13:58:55.37	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202357.png	HEADSHOT	ckurtr6kq926180hspj3a4ad6	\N
ckurtr56p425680hs9az8cbac	2021-10-12 13:58:55.407	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203469.png	HEADSHOT	ckurtr6il901680hsq98bqnfy	\N
ckurtr574430580hsi99qkxs3	2021-10-12 13:58:55.404	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202324.png	HEADSHOT	ckurtr65k772880hs8l2bje1g	\N
ckurtr57i435480hs1mmzt4d6	2021-10-12 13:58:55.445	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629599.png	HEADSHOT	ckurtr68f788980hstunnb3fo	\N
ckurtr57o437580hsy10wxket	2021-10-12 13:58:55.448	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629162.png	HEADSHOT	ckurtr68o791780hsjdt7kkm4	\N
ckurtr57x441080hsjqqz9r5h	2021-10-12 13:58:55.412	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629730.png	HEADSHOT	ckurtr695796680hstze4knnl	\N
ckurtr58a445980hsp5on5mib	2021-10-12 13:58:55.418	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627745.png	HEADSHOT	ckurtr69p802280hshwqqdlan	\N
ckurtr58o450880hsnsl839ly	2021-10-12 13:58:55.414	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628427.png	HEADSHOT	ckurtr6ej855480hs5j6xp6wk	\N
ckurtr592455080hslqgu5ukg	2021-10-12 13:58:55.463	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627789.png	HEADSHOT	ckurtr679777080hs3npb9hgu	\N
ckurtr59k459980hsr3zgjicd	2021-10-12 13:58:55.463	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628402.png	HEADSHOT	ckurtr685786180hsmt1ld3r0	\N
ckurtr5a1464880hshcdgdyqc	2021-10-12 13:58:55.467	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629109.png	HEADSHOT	ckurtr698797380hsrihho65a	\N
ckurtr5ag469780hso5n0aqnp	2021-10-12 13:58:55.488	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626149.png	HEADSHOT	ckurtr6b5817680hsl9qg6nep	\N
ckurtr5an471880hswbzjalhk	2021-10-12 13:58:55.491	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629681.png	HEADSHOT	ckurtr6kg923380hs6bsfaen6	\N
ckurtr5bf475380hs3s7sdwkl	2021-10-12 13:58:55.483	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628396.png	HEADSHOT	ckurtr6by826780hs0p3d9bge	\N
ckurtr5c4480280hspywy22e5	2021-10-12 13:58:55.473	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629610.png	HEADSHOT	ckurtr6g8874380hsklybbrod	\N
ckurtr5co485180hsacgrun2q	2021-10-12 13:58:55.525	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201567.png	HEADSHOT	ckurtr6ab808580hst4nc27s6	\N
ckurtr5d5489380hsoygchq5o	2021-10-12 13:58:55.533	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203200.png	HEADSHOT	ckurtr6ay815580hs2l3l4dnz	\N
ckurtr5dp494280hsf7mv1agz	2021-10-12 13:58:55.541	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203648.png	HEADSHOT	ckurtr6la931780hs9abs6zk1	\N
ckurtr5e9499180hsijhxgcft	2021-10-12 13:58:55.516	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/202355.png	HEADSHOT	ckurtr6ck833080hsq7j09ofi	\N
ckurtr5ey504080hshbb0clmk	2021-10-12 13:58:55.518	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629636.png	HEADSHOT	ckurtr6dp845680hs52023ppg	\N
ckurtr5f6506180hsj9gd6set	2021-10-12 13:58:55.552	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201572.png	HEADSHOT	ckurtr6fc863880hsnkhoxjfs	\N
ckurtr5f9506880hsg28q6ij9	2021-10-12 13:58:55.542	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630466.png	HEADSHOT	ckurtr6fl866680hs9vfw80mz	\N
ckurtr5fp511780hs9ua1ol8z	2021-10-12 13:58:54.643	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/teams/1610612765.svg	LOGO	\N	ckurtr73f1117280hsgklsbom1
ckurtr5g1515280hscfw5eevg	2021-10-12 13:58:54.949	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629684.png	HEADSHOT	ckurtr5lv576880hs7za5mfvz	\N
ckurtr5gh520180hsczs9v8nr	2021-10-12 13:58:54.984	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630177.png	HEADSHOT	ckurtr5nz597880hsxheeccpw	\N
ckurtr5gw524380hsoiv9339g	2021-10-12 13:58:55.134	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/204020.png	HEADSHOT	ckurtr5p8612580hsinl4uat9	\N
ckurtr5hd529280hs2tf4c9zh	2021-10-12 13:58:55.101	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/201959.png	HEADSHOT	ckurtr5qy630080hs9rdsmna3	\N
ckurtr5ht534180hsabu9ruma	2021-10-12 13:58:55.023	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1628988.png	HEADSHOT	ckurtr5tz655980hstcaoruw8	\N
ckurtr5i8538380hs9uzkfpnr	2021-10-12 13:58:55.555	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629014.png	HEADSHOT	ckurtr6g2872280hs96yh2ubd	\N
ckurtr5ih541180hs9j9n0jb6	2021-10-12 13:58:55.141	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1629008.png	HEADSHOT	ckurtr5x6688880hsuzjsrnng	\N
ckurtr5iv545380hse8qc8n92	2021-10-12 13:58:55.261	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627739.png	HEADSHOT	ckurtr6e3850580hsbrjkpbbu	\N
ckurtr5jd550280hsr9fclzsn	2021-10-12 13:58:55.496	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627884.png	HEADSHOT	ckurtr62d737880hss0n8cdps	\N
ckurtr5jq554480hsjb6fqpb3	2021-10-12 13:58:55.41	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1626253.png	HEADSHOT	ckurtr6l5930380hslikm617f	\N
ckurtr5k8559380hs0wq6c5rl	2021-10-12 13:58:55.43	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/203210.png	HEADSHOT	ckurtr67y784080hsoxaieb92	\N
ckurtr5kp564280hsdxk59ezw	2021-10-12 13:58:55.501	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630211.png	HEADSHOT	ckurtr6ak811380hs4sttv5pb	\N
ckurtr5l2568480hs2zif3ljm	2021-10-12 13:58:55.529	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1630222.png	HEADSHOT	ckurtr6cr835180hsnjmetrhu	\N
ckurtr5lj573380hs5dg9xqa0	2021-10-12 13:58:55.298	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627774.png	HEADSHOT	ckurtr6fe864580hs30jvibo8	\N
ckurtr5lp575480hshmor00y8	2021-10-12 13:58:55.17	2021-10-14 08:00:00	https://res.cloudinary.com/dbc3x3s7c/image/upload/nba/players/1627846.png	HEADSHOT	ckurtr6g0871580hsx3fdhu7s	\N
\.


--
-- Data for Name: Player; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Player" (id, "createdAt", "updatedAt", name, handle, slug, height, weight, number, "position", team) FROM stdin;
ckurtr5oa601380hs5gbdlmgv	2021-10-12 13:58:55.953	2021-10-14 08:00:00	Brian Bowen II	1628968	brian-bowen-ii	6-6	190	10	F-G	\N
ckurtr5oh603480hsaytntgir	2021-10-12 13:58:55.958	2021-10-14 08:00:00	Rodions Kurucs	1629066	rodions-kurucs	6-9	228	00	F	\N
ckurtr5os606980hsaols43l4	2021-10-12 13:58:55.98	2021-10-14 08:00:00	Quinn Cook	1626188	quinn-cook	6-1	180	2	G	\N
ckurtr5pm616780hs94vj0xcl	2021-10-12 13:58:56.123	2021-10-14 08:00:00	Vincent Poirier	1629738	vincent-poirier	7-0	235	17	C-F	\N
ckurtr5m4578980hscqi83170	2021-10-12 13:58:55.775	2021-10-14 08:00:00	Blake Griffin	201933	blake-griffin	6-9	250	2	F	ckurtr72y1113080hs005x0gxk
ckurtr5m7579680hspkdetl5s	2021-10-12 13:58:55.78	2021-10-14 08:00:00	Kyrie Irving	202681	kyrie-irving	6-2	195	11	G	ckurtr72y1113080hs005x0gxk
ckurtr5mc581080hs51hl4rf9	2021-10-12 13:58:55.789	2021-10-14 08:00:00	Miles Bridges	1628970	miles-bridges	6-6	225	0	F	ckurtr7311113780hsgrdqiegk
ckurtr5mf581780hs9qym74cd	2021-10-12 13:58:55.794	2021-10-14 08:00:00	Malik Monk	1628370	malik-monk	6-3	200	1	G	ckurtr7311113780hsgrdqiegk
ckurtr5mh582480hshbzdanyw	2021-10-12 13:58:55.798	2021-10-14 08:00:00	Devonte' Graham	1628984	devonte-graham	6-1	195	4	G	ckurtr7311113780hsgrdqiegk
ckurtr5pa613280hsd0735cco	2021-10-12 13:58:56.04	2021-10-14 08:00:00	Vernon Carey Jr.	1630176	vernon-carey-jr	6-9	270	22	F-C	ckurtr7311113780hsgrdqiegk
ckurtr5mj583180hsnexavzdb	2021-10-12 13:58:55.82	2021-10-14 08:00:00	Coby White	1629632	coby-white	6-5	195	0	G	ckurtr7341114480hs337eaj26
ckurtr5mm583880hs8f8cj65o	2021-10-12 13:58:55.826	2021-10-14 08:00:00	Javonte Green	1629750	javonte-green	6-4	205	11	G-F	ckurtr7341114480hs337eaj26
ckurtr5mo584580hsa3xpna6w	2021-10-12 13:58:55.831	2021-10-14 08:00:00	Daniel Theis	1628464	daniel-theis	6-8	245	27	F-C	ckurtr7341114480hs337eaj26
ckurtr5mu585980hsjublgz28	2021-10-12 13:58:55.842	2021-10-14 08:00:00	Dylan Windler	1629685	dylan-windler	6-6	196	9	G-F	ckurtr7371115180hslnccru8a
ckurtr5mx586680hsllmxeqk8	2021-10-12 13:58:55.846	2021-10-14 08:00:00	Cedi Osman	1626224	cedi-osman	6-7	230	16	F	ckurtr7371115180hslnccru8a
ckurtr5mz587380hs6jos43oz	2021-10-12 13:58:55.852	2021-10-14 08:00:00	Mfiondu Kabengele	1629662	mfiondu-kabengele	6-9	250	27	F-C	ckurtr7371115180hslnccru8a
ckurtr5n1588080hs72t1zfte	2021-10-12 13:58:55.857	2021-10-14 08:00:00	Dean Wade	1629731	dean-wade	6-9	228	32	F-C	ckurtr7371115180hslnccru8a
ckurtr5n3588780hsv5c6caxv	2021-10-12 13:58:55.861	2021-10-14 08:00:00	Kristaps Porzingis	204001	kristaps-porzingis	7-3	240	6	F-C	ckurtr73a1115880hsxkdan1ud
ckurtr5n6589480hs49gc0lgh	2021-10-12 13:58:55.865	2021-10-14 08:00:00	Dwight Powell	203939	dwight-powell	6-10	240	7	F-C	ckurtr73a1115880hsxkdan1ud
ckurtr5n8590180hs0d26ll8i	2021-10-12 13:58:55.87	2021-10-14 08:00:00	JJ Redick	200755	jj-redick	6-3	200	17	G	ckurtr73a1115880hsxkdan1ud
ckurtr5nb590880hse21etj0r	2021-10-12 13:58:55.874	2021-10-14 08:00:00	Willie Cauley-Stein	1626161	willie-cauley-stein	7-0	240	33	C	ckurtr73a1115880hsxkdan1ud
ckurtr5ne591580hszj8d5jpv	2021-10-12 13:58:55.883	2021-10-14 08:00:00	Will Barton	203115	will-barton	6-6	181	5	G	ckurtr73c1116580hs3i36jjw5
ckurtr5nh592280hsz7bnbhfh	2021-10-12 13:58:55.887	2021-10-14 08:00:00	Bol Bol	1629626	bol-bol	7-2	220	10	C-F	ckurtr73c1116580hs3i36jjw5
ckurtr5nj592980hsvavhbrfy	2021-10-12 13:58:55.892	2021-10-14 08:00:00	Monte Morris	1628420	monte-morris	6-2	183	11	G	ckurtr73c1116580hs3i36jjw5
ckurtr5nl593680hs4898qy70	2021-10-12 13:58:55.896	2021-10-14 08:00:00	Jamal Murray	1627750	jamal-murray	6-3	215	27	G	ckurtr73c1116580hs3i36jjw5
ckurtr5nq595080hs89rdtuhy	2021-10-12 13:58:55.911	2021-10-14 08:00:00	Dennis Smith Jr.	1628372	dennis-smith-jr	6-2	205	0	G	ckurtr73f1117280hsgklsbom1
ckurtr5ns595780hsbl5bfcsu	2021-10-12 13:58:55.916	2021-10-14 08:00:00	Tyler Cook	1629076	tyler-cook	6-8	255	25	F	ckurtr73f1117280hsgklsbom1
ckurtr5nv596480hs00aj2ulr	2021-10-12 13:58:55.92	2021-10-14 08:00:00	Mychal Mulder	1628539	mychal-mulder	6-3	184	15	G	ckurtr73h1117980hsrqsjw8xn
ckurtr5ph615380hs4ot9eqq9	2021-10-12 13:58:56.055	2021-10-14 08:00:00	Gary Payton II	1627780	gary-payton-ii	6-3	195	0	G	ckurtr73h1117980hsrqsjw8xn
ckurtr5pj616080hsumsacbc4	2021-10-12 13:58:56.06	2021-10-14 08:00:00	Draymond Green	203110	draymond-green	6-6	230	23	F	ckurtr73h1117980hsrqsjw8xn
ckurtr5pp617480hsmez7o1fm	2021-10-12 13:58:56.065	2021-10-14 08:00:00	Dante Exum	203957	dante-exum	6-5	214	5	G	ckurtr73k1118680hs60y14qgi
ckurtr5pr618180hsctndel2t	2021-10-12 13:58:56.073	2021-10-14 08:00:00	Edmond Sumner	1628410	edmond-sumner	6-4	196	5	G	ckurtr73n1119380hs6h18kxhb
ckurtr5nx597180hs8446m2rd	2021-10-12 13:58:55.925	2021-10-14 08:00:00	Obi Toppin	1630167	obi-toppin	6-9	220	1	F	ckurtr74b1124980hs9jiumudw
ckurtr5nz597880hsxheeccpw	2021-10-12 13:58:55.929	2021-10-14 08:00:00	Theo Maledon	1630177	theo-maledon	6-4	175	11	G	ckurtr74e1125680hs5fbtikqr
ckurtr5o1598580hs4iffjvdo	2021-10-12 13:58:55.934	2021-10-14 08:00:00	Aleksej Pokusevski	1630197	aleksej-pokusevski	7-0	190	17	C	ckurtr74e1125680hs5fbtikqr
ckurtr5o4599280hsw2bbvzei	2021-10-12 13:58:55.939	2021-10-14 08:00:00	Isaiah Roby	1629676	isaiah-roby	6-8	230	22	F	ckurtr74e1125680hs5fbtikqr
ckurtr5o6599980hs10578l5m	2021-10-12 13:58:55.943	2021-10-14 08:00:00	Chuma Okeke	1629643	chuma-okeke	6-6	229	3	F	ckurtr74g1126380hsi40absdd
ckurtr5o8600680hsnf0hpc2y	2021-10-12 13:58:55.948	2021-10-14 08:00:00	Dwayne Bacon	1628407	dwayne-bacon	6-6	221	8	G-F	ckurtr74g1126380hsi40absdd
ckurtr5od602080hsoqtm71iq	2021-10-12 13:58:55.963	2021-10-14 08:00:00	Cole Anthony	1630175	cole-anthony	6-2	185	50	G	ckurtr74g1126380hsi40absdd
ckurtr5of602780hsmivmqvaj	2021-10-12 13:58:55.967	2021-10-14 08:00:00	Tyrese Maxey	1630178	tyrese-maxey	6-2	200	0	G	ckurtr74j1127080hss2acd21l
ckurtr5ok604180hsv1klnmlx	2021-10-12 13:58:55.972	2021-10-14 08:00:00	Isaiah Joe	1630198	isaiah-joe	6-4	165	7	G	ckurtr74j1127080hss2acd21l
ckurtr5oo605580hsud7sz7cd	2021-10-12 13:58:55.984	2021-10-14 08:00:00	Jalen Smith	1630188	jalen-smith	6-10	215	10	F-C	ckurtr74l1127780hsxilzh94e
ckurtr5oq606280hs3o3ca36x	2021-10-12 13:58:55.989	2021-10-14 08:00:00	Enes Kanter	202683	enes-kanter	6-10	250	11	C	ckurtr74o1128480hsw91nsqm0
ckurtr5ou607680hsue6koncs	2021-10-12 13:58:55.993	2021-10-14 08:00:00	CJ Elleby	1629604	cj-elleby	6-6	200	16	F-G	ckurtr74o1128480hsw91nsqm0
ckurtr5ow608380hsk63nm4zh	2021-10-12 13:58:55.998	2021-10-14 08:00:00	Robert Woodard II	1630218	robert-woodard-ii	6-6	235	13	F	ckurtr74q1129180hszuvk8s9g
ckurtr5oy609080hshf0m03br	2021-10-12 13:58:56.002	2021-10-14 08:00:00	Devin Vassell	1630170	devin-vassell	6-5	200	24	G-F	ckurtr74t1129880hsjudk6xi2
ckurtr5p0609780hs76blwngx	2021-10-12 13:58:56.007	2021-10-14 08:00:00	Tre Jones	1630200	tre-jones	6-1	185	33	G	ckurtr74t1129880hsjudk6xi2
ckurtr5p2610480hs025npps6	2021-10-12 13:58:56.011	2021-10-14 08:00:00	Malachi Flynn	1630201	malachi-flynn	6-1	175	8	G	ckurtr74v1130580hsggipc6wc
ckurtr5p4611180hs5y1rsed1	2021-10-12 13:58:56.016	2021-10-14 08:00:00	Trent Forrest	1630235	trent-forrest	6-4	210	3	G	ckurtr74y1131280hsgn5id1b7
ckurtr5p6611880hsj8bpwpdk	2021-10-12 13:58:56.02	2021-10-14 08:00:00	Elijah Hughes	1630190	elijah-hughes	6-5	215	33	G	ckurtr74y1131280hsgn5id1b7
ckurtr5r1630780hs4qv1bizu	2021-10-12 13:58:56.162	2021-10-14 08:00:00	Marquese Chriss	1627737	marquese-chriss	6-9	240	32	F	\N
ckurtr5tt654580hs1qz9z44f	2021-10-12 13:58:56.345	2021-10-14 08:00:00	Darius Miller	203121	darius-miller	6-6	225	12	F	\N
ckurtr5t0646880hs80rr3459	2021-10-12 13:58:56.313	2021-10-14 08:00:00	Joe Harris	203925	joe-harris	6-6	220	12	G-F	ckurtr72y1113080hs005x0gxk
ckurtr5t3647580hsqp9uzmsy	2021-10-12 13:58:56.317	2021-10-14 08:00:00	Josh Richardson	1626196	josh-richardson	6-5	200	0	G	ckurtr73a1115880hsxkdan1ud
ckurtr5ta648980hsdg4676mq	2021-10-12 13:58:56.326	2021-10-14 08:00:00	Jerami Grant	203924	jerami-grant	6-8	210	9	F	ckurtr73f1117280hsgklsbom1
ckurtr5tc649680hs9s6pmida	2021-10-12 13:58:56.331	2021-10-14 08:00:00	Jahlil Okafor	1626143	jahlil-okafor	6-10	270	13	C-F	ckurtr73f1117280hsgklsbom1
ckurtr5ti651080hs2krdydle	2021-10-12 13:58:56.35	2021-10-14 08:00:00	Damion Lee	1627814	damion-lee	6-5	210	1	G-F	ckurtr73h1117980hsrqsjw8xn
ckurtr5tk651780hsg5j9lm49	2021-10-12 13:58:56.355	2021-10-14 08:00:00	Eric Paschall	1629672	eric-paschall	6-6	255	7	F	ckurtr73h1117980hsrqsjw8xn
ckurtr5tm652480hs0s6ndeja	2021-10-12 13:58:56.359	2021-10-14 08:00:00	Kent Bazemore	203145	kent-bazemore	6-4	195	26	G-F	ckurtr73h1117980hsrqsjw8xn
ckurtr5tp653180hseia9kbd3	2021-10-12 13:58:56.368	2021-10-14 08:00:00	Sterling Brown	1628425	sterling-brown	6-5	219	0	G-F	ckurtr73k1118680hs60y14qgi
ckurtr5tr653880hsq22lkrma	2021-10-12 13:58:56.372	2021-10-14 08:00:00	Kelly Olynyk	203482	kelly-olynyk	6-11	240	41	F-C	ckurtr73k1118680hs60y14qgi
ckurtr5pt618880hsflssn19h	2021-10-12 13:58:56.078	2021-10-14 08:00:00	Jeremy Lamb	203087	jeremy-lamb	6-5	180	26	G-F	ckurtr73n1119380hs6h18kxhb
ckurtr5tw655280hsv41bvvvb	2021-10-12 13:58:56.377	2021-10-14 08:00:00	T.J. Warren	203933	tj-warren	6-8	220	1	F	ckurtr73n1119380hs6h18kxhb
ckurtr5pw619580hslq4ksm3p	2021-10-12 13:58:56.082	2021-10-14 08:00:00	Kawhi Leonard	202695	kawhi-leonard	6-7	225	2	F	ckurtr73q1120080hsuk9pz8mb
ckurtr5u3657380hsq3y19odv	2021-10-12 13:58:56.39	2021-10-14 08:00:00	Reggie Jackson	202704	reggie-jackson	6-2	208	1	G	ckurtr73q1120080hsuk9pz8mb
ckurtr5u6658080hsrced2aot	2021-10-12 13:58:56.394	2021-10-14 08:00:00	Rajon Rondo	200765	rajon-rondo	6-1	180	4	G	ckurtr73q1120080hsuk9pz8mb
ckurtr5py620280hsani2twjx	2021-10-12 13:58:56.087	2021-10-14 08:00:00	LeBron James	2544	lebron-james	6-9	250	6	F	ckurtr73t1120780hsfcm6d1g8
ckurtr5q1620980hsgldsict8	2021-10-12 13:58:56.092	2021-10-14 08:00:00	Ben McLemore	203463	ben-mclemore	6-3	195	7	G	ckurtr73t1120780hsfcm6d1g8
ckurtr5ub659480hsxakemwfg	2021-10-12 13:58:56.412	2021-10-14 08:00:00	Kentavious Caldwell-Pope	203484	kentavious-caldwell-pope	6-5	204	1	G	ckurtr73t1120780hsfcm6d1g8
ckurtr5ue660180hsp7eka6cj	2021-10-12 13:58:56.416	2021-10-14 08:00:00	Andre Drummond	203083	andre-drummond	6-10	279	2	C	ckurtr73t1120780hsfcm6d1g8
ckurtr5q3621680hsavfal9i7	2021-10-12 13:58:56.105	2021-10-14 08:00:00	De'Anthony Melton	1629001	deanthony-melton	6-2	200	0	G	ckurtr73w1121480hs5q03bem0
ckurtr5q6622380hsyu7a5ycc	2021-10-12 13:58:56.109	2021-10-14 08:00:00	Gabe Vincent	1629216	gabe-vincent	6-3	200	2	G	ckurtr73y1122180hs7mhd2u3c
ckurtr5q9623080hsmxrpj45o	2021-10-12 13:58:56.114	2021-10-14 08:00:00	Victor Oladipo	203506	victor-oladipo	6-4	213	4	G	ckurtr73y1122180hs7mhd2u3c
ckurtr5qb623780hsatificfy	2021-10-12 13:58:56.118	2021-10-14 08:00:00	Jimmy Butler	202710	jimmy-butler	6-7	230	22	F	ckurtr73y1122180hs7mhd2u3c
ckurtr5qe624480hs7ddqvwpg	2021-10-12 13:58:56.127	2021-10-14 08:00:00	Malik Beasley	1627736	malik-beasley	6-4	187	5	G	ckurtr7441123580hswoadqvid
ckurtr5qh625180hsgc0ds4nu	2021-10-12 13:58:56.132	2021-10-14 08:00:00	Jarred Vanderbilt	1629020	jarred-vanderbilt	6-9	214	8	F	ckurtr7441123580hswoadqvid
ckurtr5qk625880hsxalojf26	2021-10-12 13:58:56.158	2021-10-14 08:00:00	Zion Williamson	1629627	zion-williamson	6-7	284	1	F	ckurtr7471124280hshmkzngtt
ckurtr5qn626580hsr6lllu0i	2021-10-12 13:58:56.167	2021-10-14 08:00:00	Steven Adams	203500	steven-adams	6-11	265	12	C	ckurtr7471124280hshmkzngtt
ckurtr5qs627980hssmxevoq0	2021-10-12 13:58:56.176	2021-10-14 08:00:00	Nerlens Noel	203457	nerlens-noel	6-11	220	3	C-F	ckurtr74b1124980hs9jiumudw
ckurtr5qu628680hsb7ufz3iy	2021-10-12 13:58:56.181	2021-10-14 08:00:00	Elfrid Payton	203901	elfrid-payton	6-3	195	6	G	ckurtr74b1124980hs9jiumudw
ckurtr5qw629380hsrdbhcwao	2021-10-12 13:58:56.185	2021-10-14 08:00:00	RJ Barrett	1629628	rj-barrett	6-6	214	9	F-G	ckurtr74b1124980hs9jiumudw
ckurtr5r3631480hsodejjo40	2021-10-12 13:58:56.194	2021-10-14 08:00:00	Mike Muscala	203488	mike-muscala	6-10	240	33	F-C	ckurtr74e1125680hs5fbtikqr
ckurtr5r5632180hs0sr5gi4s	2021-10-12 13:58:56.198	2021-10-14 08:00:00	Kenrich Williams	1629026	kenrich-williams	6-6	210	34	G-F	ckurtr74e1125680hs5fbtikqr
ckurtr5r7632880hsu9wgihij	2021-10-12 13:58:56.203	2021-10-14 08:00:00	Mo Bamba	1628964	mo-bamba	7-0	231	5	C	ckurtr74g1126380hsi40absdd
ckurtr5r9633580hsz2q7pl55	2021-10-12 13:58:56.207	2021-10-14 08:00:00	Mike Scott	203118	mike-scott	6-7	237	1	F	ckurtr74j1127080hss2acd21l
ckurtr5rc634280hsd2wxrybp	2021-10-12 13:58:56.212	2021-10-14 08:00:00	Tobias Harris	202699	tobias-harris	6-8	226	12	F	ckurtr74j1127080hss2acd21l
ckurtr5rf634980hshlvcegik	2021-10-12 13:58:56.216	2021-10-14 08:00:00	Shake Milton	1629003	shake-milton	6-5	205	18	G-F	ckurtr74j1127080hss2acd21l
ckurtr5rl636380hsjfae6i1l	2021-10-12 13:58:56.226	2021-10-14 08:00:00	Cameron Payne	1626166	cameron-payne	6-1	183	15	G	ckurtr74l1127780hsxilzh94e
ckurtr5ro637080hsu1umdtqa	2021-10-12 13:58:56.23	2021-10-14 08:00:00	Dario Saric	203967	dario-saric	6-10	225	20	F-C	ckurtr74l1127780hsxilzh94e
ckurtr5rq637780hsgo0kjmi3	2021-10-12 13:58:56.236	2021-10-14 08:00:00	E'Twaun Moore	202734	etwaun-moore	6-3	191	55	G	ckurtr74l1127780hsxilzh94e
ckurtr5rt638480hsw3mz6jbk	2021-10-12 13:58:56.245	2021-10-14 08:00:00	Harry Giles III	1628385	harry-giles-iii	6-11	240	4	F-C	ckurtr74o1128480hsw91nsqm0
ckurtr5rw639180hs0dybzf26	2021-10-12 13:58:56.251	2021-10-14 08:00:00	Jusuf Nurkic	203994	jusuf-nurkic	6-11	290	27	C	ckurtr74o1128480hsw91nsqm0
ckurtr5s0639880hsdrx49z8h	2021-10-12 13:58:56.256	2021-10-14 08:00:00	De'Aaron Fox	1628368	deaaron-fox	6-3	185	5	G	ckurtr74q1129180hszuvk8s9g
ckurtr5s3640580hsaqieran3	2021-10-12 13:58:56.26	2021-10-14 08:00:00	Maurice Harkless	203090	maurice-harkless	6-7	220	8	F-G	ckurtr74q1129180hszuvk8s9g
ckurtr5sa641980hslqmq925x	2021-10-12 13:58:56.274	2021-10-14 08:00:00	Drew Eubanks	1629234	drew-eubanks	6-9	245	14	F-C	ckurtr74t1129880hsjudk6xi2
ckurtr5sd642680hs2qqyf3le	2021-10-12 13:58:56.278	2021-10-14 08:00:00	Rudy Gay	200752	rudy-gay	6-8	250	22	F-G	ckurtr74t1129880hsjudk6xi2
ckurtr5sh643380hsqxmayh2l	2021-10-12 13:58:56.283	2021-10-14 08:00:00	Donovan Mitchell	1628378	donovan-mitchell	6-1	215	45	G	ckurtr74y1131280hsgn5id1b7
ckurtr5sk644080hs0tvd1xlf	2021-10-12 13:58:56.287	2021-10-14 08:00:00	Miye Oni	1629671	miye-oni	6-5	206	81	G-F	ckurtr74y1131280hsgn5id1b7
ckurtr5sr644780hs0j5loadf	2021-10-12 13:58:56.292	2021-10-14 08:00:00	Raul Neto	203526	raul-neto	6-1	180	19	G	ckurtr7501131980hsxu0tclct
ckurtr5we679780hspt2jtppy	2021-10-12 13:58:56.571	2021-10-14 08:00:00	Greg Whittington	204222	greg-whittington	6-8	210	3	F	\N
ckurtr5ww685380hskc4cqgh7	2021-10-12 13:58:56.605	2021-10-14 08:00:00	Patrick McCaw	1627775	patrick-mccaw	6-7	181	22	G	\N
ckurtr5wl681880hsznus126p	2021-10-12 13:58:56.597	2021-10-14 08:00:00	Devon Dotson	1629653	devon-dotson	6-2	185	3	G	ckurtr7341114480hs337eaj26
ckurtr5wp683280hspc1x9gqy	2021-10-12 13:58:56.622	2021-10-14 08:00:00	Collin Sexton	1629012	collin-sexton	6-1	190	2	G	ckurtr7371115180hslnccru8a
ckurtr5ws683980hsapmmsukd	2021-10-12 13:58:56.627	2021-10-14 08:00:00	Lamar Stevens	1630205	lamar-stevens	6-6	230	8	F	ckurtr7371115180hslnccru8a
ckurtr5x2687480hslqkr1eew	2021-10-12 13:58:56.647	2021-10-14 08:00:00	Tyrell Terry	1630179	tyrell-terry	6-2	160	1	G	ckurtr73a1115880hsxkdan1ud
ckurtr5x4688180hsgpgokucn	2021-10-12 13:58:56.652	2021-10-14 08:00:00	Nicolo Melli	1629740	nicolo-melli	6-9	236	44	F	ckurtr73a1115880hsxkdan1ud
ckurtr5x6688880hsuzjsrnng	2021-10-12 13:58:56.656	2021-10-14 08:00:00	Michael Porter Jr.	1629008	michael-porter-jr	6-10	218	1	F	ckurtr73c1116580hs3i36jjw5
ckurtr5x8689580hs022shuqm	2021-10-12 13:58:56.66	2021-10-14 08:00:00	Paul Millsap	200794	paul-millsap	6-7	257	4	F	ckurtr73c1116580hs3i36jjw5
ckurtr5xa690280hsgwqszqp3	2021-10-12 13:58:56.665	2021-10-14 08:00:00	Wayne Ellington	201961	wayne-ellington	6-4	207	8	G	ckurtr73f1117280hsgklsbom1
ckurtr5xc690980hshg66cou5	2021-10-12 13:58:56.669	2021-10-14 08:00:00	Jordan Poole	1629673	jordan-poole	6-4	194	3	G	ckurtr73h1117980hsrqsjw8xn
ckurtr5xe691680hsi8g678gt	2021-10-12 13:58:56.673	2021-10-14 08:00:00	D.J. Wilson	1628391	dj-wilson	6-10	231	00	F	ckurtr73k1118680hs60y14qgi
ckurtr5xg692380hs6wizok0c	2021-10-12 13:58:56.678	2021-10-14 08:00:00	Eric Gordon	201569	eric-gordon	6-3	215	10	G	ckurtr73k1118680hs60y14qgi
ckurtr5xi693080hsj30og1ki	2021-10-12 13:58:56.682	2021-10-14 08:00:00	Domantas Sabonis	1627734	domantas-sabonis	6-11	240	11	F-C	ckurtr73n1119380hs6h18kxhb
ckurtr5xk693780hs1jvj6935	2021-10-12 13:58:56.686	2021-10-14 08:00:00	JaKarr Sampson	203960	jakarr-sampson	6-7	214	14	F	ckurtr73n1119380hs6h18kxhb
ckurtr5xm694480hs179ofdx9	2021-10-12 13:58:56.695	2021-10-14 08:00:00	Terance Mann	1629611	terance-mann	6-5	215	14	G-F	ckurtr73q1120080hsuk9pz8mb
ckurtr5xo695180hs5f1hie8q	2021-10-12 13:58:56.699	2021-10-14 08:00:00	Ivica Zubac	1627826	ivica-zubac	7-0	240	40	C	ckurtr73q1120080hsuk9pz8mb
ckurtr5uh660880hsqpgxzxcu	2021-10-12 13:58:56.42	2021-10-14 08:00:00	Alex Caruso	1627936	alex-caruso	6-4	186	4	G	ckurtr73t1120780hsfcm6d1g8
ckurtr5uk661580hskkgf2asb	2021-10-12 13:58:56.425	2021-10-14 08:00:00	Talen Horton-Tucker	1629659	talen-horton-tucker	6-4	234	5	G	ckurtr73t1120780hsfcm6d1g8
ckurtr5xr695880hsu9awvv0c	2021-10-12 13:58:56.704	2021-10-14 08:00:00	Anthony Davis	203076	anthony-davis	6-10	253	3	F-C	ckurtr73t1120780hsfcm6d1g8
ckurtr5un662280hsys2a0ck7	2021-10-12 13:58:56.439	2021-10-14 08:00:00	Brandon Clarke	1629634	brandon-clarke	6-8	215	15	F	ckurtr73w1121480hs5q03bem0
ckurtr5xu696580hs8gg0nvhj	2021-10-12 13:58:56.708	2021-10-14 08:00:00	Kyle Anderson	203937	kyle-anderson	6-9	230	1	F-G	ckurtr73w1121480hs5q03bem0
ckurtr5up662980hsyvopbw1g	2021-10-12 13:58:56.444	2021-10-14 08:00:00	Tyler Herro	1629639	tyler-herro	6-5	195	14	G	ckurtr73y1122180hs7mhd2u3c
ckurtr5us663680hsn951pwor	2021-10-12 13:58:56.448	2021-10-14 08:00:00	Duncan Robinson	1629130	duncan-robinson	6-7	215	55	F	ckurtr73y1122180hs7mhd2u3c
ckurtr5y2698680hsvu8h0in7	2021-10-12 13:58:56.722	2021-10-14 08:00:00	KZ Okpala	1629644	kz-okpala	6-8	215	11	F-G	ckurtr73y1122180hs7mhd2u3c
ckurtr5y5699380hs9q2shel0	2021-10-12 13:58:56.727	2021-10-14 08:00:00	Bam Adebayo	1628389	bam-adebayo	6-9	255	13	C-F	ckurtr73y1122180hs7mhd2u3c
ckurtr5uu664380hsouo2ut6m	2021-10-12 13:58:56.453	2021-10-14 08:00:00	Bobby Portis	1626171	bobby-portis	6-10	250	9	F	ckurtr7411122880hsbsw23one
ckurtr5uw665080hsudvic271	2021-10-12 13:58:56.458	2021-10-14 08:00:00	P.J. Tucker	200782	pj-tucker	6-5	245	17	F	ckurtr7411122880hsbsw23one
ckurtr5uz665780hsb0hilnxf	2021-10-12 13:58:56.463	2021-10-14 08:00:00	Pat Connaughton	1626192	pat-connaughton	6-5	209	24	G	ckurtr7411122880hsbsw23one
ckurtr5v2666480hsxsdhgw3t	2021-10-12 13:58:56.468	2021-10-14 08:00:00	Jaylen Nowell	1629669	jaylen-nowell	6-4	201	4	G	ckurtr7441123580hswoadqvid
ckurtr5v5667180hsz8yd5ugo	2021-10-12 13:58:56.472	2021-10-14 08:00:00	Naz Reid	1629675	naz-reid	6-9	264	11	C-F	ckurtr7441123580hswoadqvid
ckurtr5yb700780hsqj1tnnu5	2021-10-12 13:58:56.741	2021-10-14 08:00:00	D'Angelo Russell	1626156	dangelo-russell	6-4	193	0	G	ckurtr7441123580hswoadqvid
ckurtr5v8667880hs6lxcixlf	2021-10-12 13:58:56.477	2021-10-14 08:00:00	Lonzo Ball	1628366	lonzo-ball	6-6	190	2	G	ckurtr7471124280hshmkzngtt
ckurtr5va668580hs0ll0ej6q	2021-10-12 13:58:56.481	2021-10-14 08:00:00	Josh Hart	1628404	josh-hart	6-5	215	3	G	ckurtr7471124280hshmkzngtt
ckurtr5vd669280hst10a9gzj	2021-10-12 13:58:56.485	2021-10-14 08:00:00	James Johnson	201949	james-johnson	6-7	240	16	F	ckurtr7471124280hshmkzngtt
ckurtr5vf669980hs6qrwf08d	2021-10-12 13:58:56.49	2021-10-14 08:00:00	Derrick Rose	201565	derrick-rose	6-2	200	4	G	ckurtr74b1124980hs9jiumudw
ckurtr5vi670680hsu3qtrhnm	2021-10-12 13:58:56.494	2021-10-14 08:00:00	Alec Burks	202692	alec-burks	6-6	214	18	G	ckurtr74b1124980hs9jiumudw
ckurtr5vl671380hsxsuw4b9f	2021-10-12 13:58:56.499	2021-10-14 08:00:00	Reggie Bullock	203493	reggie-bullock	6-6	205	25	G-F	ckurtr74b1124980hs9jiumudw
ckurtr5vn672080hsy082avm6	2021-10-12 13:58:56.503	2021-10-14 08:00:00	Julius Randle	203944	julius-randle	6-8	250	30	F-C	ckurtr74b1124980hs9jiumudw
ckurtr5vq672780hsk6mxmwaq	2021-10-12 13:58:56.508	2021-10-14 08:00:00	Luguentz Dort	1629652	luguentz-dort	6-3	215	5	G	ckurtr74e1125680hs5fbtikqr
ckurtr5vs673480hsldcu0bk0	2021-10-12 13:58:56.513	2021-10-14 08:00:00	Gary Harris	203914	gary-harris	6-4	210	14	G	ckurtr74g1126380hsi40absdd
ckurtr5vu674180hshw8v38uq	2021-10-12 13:58:56.518	2021-10-14 08:00:00	George Hill	201588	george-hill	6-4	188	33	G	ckurtr74j1127080hss2acd21l
ckurtr5yi702180hspq3vzb1z	2021-10-12 13:58:56.75	2021-10-14 08:00:00	Furkan Korkmaz	1627788	furkan-korkmaz	6-7	202	30	G-F	ckurtr74j1127080hss2acd21l
ckurtr5vw674880hsdszhzuh1	2021-10-12 13:58:56.522	2021-10-14 08:00:00	Langston Galloway	204038	langston-galloway	6-1	200	2	G	ckurtr74l1127780hsxilzh94e
ckurtr5vz675580hsxacuafum	2021-10-12 13:58:56.528	2021-10-14 08:00:00	Kyle Guy	1629657	kyle-guy	6-1	167	7	G	ckurtr74q1129180hszuvk8s9g
ckurtr5w1676280hsptf8fb2n	2021-10-12 13:58:56.533	2021-10-14 08:00:00	Delon Wright	1626153	delon-wright	6-5	185	55	G	ckurtr74q1129180hszuvk8s9g
ckurtr5w3676980hsaqz1df84	2021-10-12 13:58:56.539	2021-10-14 08:00:00	Patty Mills	201988	patty-mills	6-1	180	8	G	ckurtr74t1129880hsjudk6xi2
ckurtr5w6677680hst7rmc1rm	2021-10-12 13:58:56.544	2021-10-14 08:00:00	Udoka Azubuike	1628962	udoka-azubuike	6-10	280	20	C-F	ckurtr74y1131280hsgn5id1b7
ckurtr5w9678380hssxs47wpn	2021-10-12 13:58:56.549	2021-10-14 08:00:00	Cassius Winston	1630216	cassius-winston	6-1	185	5	G	ckurtr7501131980hsxu0tclct
ckurtr5wc679080hsnhwensm1	2021-10-12 13:58:56.555	2021-10-14 08:00:00	Deni Avdija	1630166	deni-avdija	6-9	210	9	F	ckurtr7501131980hsxu0tclct
ckurtr5yw705680hs0ri0dw3y	2021-10-12 13:58:56.755	2021-10-14 08:00:00	Chris Silva	1629735	chris-silva	6-8	234	30	F	\N
ckurtr5zj710580hsydmr99hf	2021-10-12 13:58:56.818	2021-10-14 08:00:00	Jerome Robinson	1629010	jerome-robinson	6-4	190	12	G	\N
ckurtr61h728780hsg0s7wsk9	2021-10-12 13:58:56.949	2021-10-14 08:00:00	Cameron Reynolds	1629244	cameron-reynolds	6-7	225	23	F	\N
ckurtr5zq711980hshp8ai379	2021-10-12 13:58:56.836	2021-10-14 08:00:00	Mike James	1628455	mike-james	6-1	175	55	G	ckurtr72y1113080hs005x0gxk
ckurtr5zv713380hsc3mttpx4	2021-10-12 13:58:56.853	2021-10-14 08:00:00	Trey Burke	203504	trey-burke	6-0	185	3	G	ckurtr73a1115880hsxkdan1ud
ckurtr602715480hsr2kyxjg6	2021-10-12 13:58:56.881	2021-10-14 08:00:00	Nikola Jokic	203999	nikola-jokic	6-11	284	15	C	ckurtr73c1116580hs3i36jjw5
ckurtr605716180hsvof17suo	2021-10-12 13:58:56.885	2021-10-14 08:00:00	Zeke Nnaji	1630192	zeke-nnaji	6-9	240	22	F-C	ckurtr73c1116580hs3i36jjw5
ckurtr608716880hsetuw94pw	2021-10-12 13:58:56.889	2021-10-14 08:00:00	Saben Lee	1630240	saben-lee	6-2	183	38	G	ckurtr73f1117280hsgklsbom1
ckurtr60a717580hsyw4rc6lo	2021-10-12 13:58:56.893	2021-10-14 08:00:00	Saddiq Bey	1630180	saddiq-bey	6-7	215	41	F	ckurtr73f1117280hsgklsbom1
ckurtr60d718280hsztggiu2g	2021-10-12 13:58:56.897	2021-10-14 08:00:00	Sekou Doumbouya	1629635	sekou-doumbouya	6-8	230	45	F	ckurtr73f1117280hsgklsbom1
ckurtr60j719680hsgez13a5d	2021-10-12 13:58:56.906	2021-10-14 08:00:00	Nico Mannion	1630185	nico-mannion	6-2	190	2	G	ckurtr73h1117980hsrqsjw8xn
ckurtr60m720380hsp17437ma	2021-10-12 13:58:56.91	2021-10-14 08:00:00	James Wiseman	1630164	james-wiseman	7-0	240	33	C	ckurtr73h1117980hsrqsjw8xn
ckurtr60o721080hspe6ebhmn	2021-10-12 13:58:56.914	2021-10-14 08:00:00	John Wall	202322	john-wall	6-3	210	1	G	ckurtr73k1118680hs60y14qgi
ckurtr60q721780hs9doolcox	2021-10-12 13:58:56.918	2021-10-14 08:00:00	Kenyon Martin Jr.	1630231	kenyon-martin-jr	6-6	215	6	F	ckurtr73k1118680hs60y14qgi
ckurtr60t722480hsltf7fph3	2021-10-12 13:58:56.922	2021-10-14 08:00:00	Jae'Sean Tate	1630256	jaesean-tate	6-4	230	8	F	ckurtr73k1118680hs60y14qgi
ckurtr60y723880hst3xzp7f9	2021-10-12 13:58:56.931	2021-10-14 08:00:00	Cassius Stanley	1630199	cassius-stanley	6-5	190	2	G	ckurtr73n1119380hs6h18kxhb
ckurtr611724580hsqmte2f1s	2021-10-12 13:58:56.935	2021-10-14 08:00:00	Caris LeVert	1627747	caris-levert	6-6	205	22	G	ckurtr73n1119380hs6h18kxhb
ckurtr614725280hsr5g9flrd	2021-10-12 13:58:56.941	2021-10-14 08:00:00	Serge Ibaka	201586	serge-ibaka	6-10	235	9	F	ckurtr73q1120080hsuk9pz8mb
ckurtr616725980hsl9lhdpvs	2021-10-12 13:58:56.945	2021-10-14 08:00:00	Daniel Oturu	1630187	daniel-oturu	6-8	240	10	C	ckurtr73q1120080hsuk9pz8mb
ckurtr618726680hsatxcvj7u	2021-10-12 13:58:56.954	2021-10-14 08:00:00	Kyle Kuzma	1628398	kyle-kuzma	6-10	221	0	F	ckurtr73t1120780hsfcm6d1g8
ckurtr61b727380hsjgrg06e3	2021-10-12 13:58:56.96	2021-10-14 08:00:00	Marc Gasol	201188	marc-gasol	6-11	255	14	C	ckurtr73t1120780hsfcm6d1g8
ckurtr61e728080hsvbnat3ur	2021-10-12 13:58:56.964	2021-10-14 08:00:00	Markieff Morris	202693	markieff-morris	6-9	245	88	F	ckurtr73t1120780hsfcm6d1g8
ckurtr61l729480hsbp4anek5	2021-10-12 13:58:56.968	2021-10-14 08:00:00	Xavier Tillman	1630214	xavier-tillman	6-8	245	2	F	ckurtr73w1121480hs5q03bem0
ckurtr61n730180hsgfp053ce	2021-10-12 13:58:56.973	2021-10-14 08:00:00	Tyus Jones	1626145	tyus-jones	6-0	196	21	G	ckurtr73w1121480hs5q03bem0
ckurtr61q730880hskn2dw9jj	2021-10-12 13:58:56.977	2021-10-14 08:00:00	Goran Dragic	201609	goran-dragic	6-3	190	7	G	ckurtr73y1122180hs7mhd2u3c
ckurtr61t731580hslljbeh84	2021-10-12 13:58:56.981	2021-10-14 08:00:00	Wes Iwundu	1628411	wes-iwundu	6-6	195	4	F	ckurtr7471124280hshmkzngtt
ckurtr61v732280hsyviny4nb	2021-10-12 13:58:56.985	2021-10-14 08:00:00	Wenyen Gabriel	1629117	wenyen-gabriel	6-9	205	32	F	ckurtr7471124280hshmkzngtt
ckurtr61y732980hsfej3gyux	2021-10-12 13:58:56.99	2021-10-14 08:00:00	Kevin Knox II	1628995	kevin-knox-ii	6-7	215	20	F	ckurtr74b1124980hs9jiumudw
ckurtr620733680hst7dh4wg2	2021-10-12 13:58:56.994	2021-10-14 08:00:00	Moritz Wagner	1629021	moritz-wagner	6-11	245	21	F-C	ckurtr74g1126380hsi40absdd
ckurtr622734380hs3ijn3g91	2021-10-12 13:58:56.999	2021-10-14 08:00:00	Danny Green	201980	danny-green	6-6	215	14	G	ckurtr74j1127080hss2acd21l
ckurtr5yl702880hs91nlwobk	2021-10-12 13:58:56.759	2021-10-14 08:00:00	Deandre Ayton	1629028	deandre-ayton	6-11	250	22	C	ckurtr74l1127780hsxilzh94e
ckurtr5yo703580hstji8ahrv	2021-10-12 13:58:56.764	2021-10-14 08:00:00	Cameron Johnson	1629661	cameron-johnson	6-8	210	23	F	ckurtr74l1127780hsxilzh94e
ckurtr629736480hs27x32t3h	2021-10-12 13:58:57.013	2021-10-14 08:00:00	Chris Paul	101108	chris-paul	6-0	175	3	G	ckurtr74l1127780hsxilzh94e
ckurtr62b737180hsmi4ixc4q	2021-10-12 13:58:57.018	2021-10-14 08:00:00	CJ McCollum	203468	cj-mccollum	6-3	190	3	G	ckurtr74o1128480hsw91nsqm0
ckurtr62d737880hss0n8cdps	2021-10-12 13:58:57.023	2021-10-14 08:00:00	Derrick Jones Jr.	1627884	derrick-jones-jr	6-5	210	5	F	ckurtr74o1128480hsw91nsqm0
ckurtr62f738580hstgysu8h7	2021-10-12 13:58:57.028	2021-10-14 08:00:00	Justin James	1629713	justin-james	6-7	190	10	G-F	ckurtr74q1129180hszuvk8s9g
ckurtr62h739280hs1j9czakp	2021-10-12 13:58:57.033	2021-10-14 08:00:00	Marvin Bagley III	1628963	marvin-bagley-iii	6-11	235	35	F	ckurtr74q1129180hszuvk8s9g
ckurtr5yr704280hs5lasnpsg	2021-10-12 13:58:56.769	2021-10-14 08:00:00	Derrick White	1628401	derrick-white	6-4	190	4	G	ckurtr74t1129880hsjudk6xi2
ckurtr5yt704980hs1thxejv4	2021-10-12 13:58:56.774	2021-10-14 08:00:00	Keita Bates-Diop	1628966	keita-bates-diop	6-8	229	31	F	ckurtr74t1129880hsjudk6xi2
ckurtr5z1706380hszshfqu7g	2021-10-12 13:58:56.783	2021-10-14 08:00:00	Fred VanVleet	1627832	fred-vanvleet	6-1	197	23	G	ckurtr74v1130580hsggipc6wc
ckurtr5z4707080hscc8qlghh	2021-10-12 13:58:56.787	2021-10-14 08:00:00	Khem Birch	203920	khem-birch	6-9	233	24	C	ckurtr74v1130580hsggipc6wc
ckurtr62q742080hstava70a6	2021-10-12 13:58:57.067	2021-10-14 08:00:00	Paul Watson	1628778	paul-watson	6-6	210	1	G	ckurtr74v1130580hsggipc6wc
ckurtr62s742780hs1crgq5zq	2021-10-12 13:58:57.073	2021-10-14 08:00:00	Kyle Lowry	200768	kyle-lowry	6-0	196	7	G	ckurtr74v1130580hsggipc6wc
ckurtr5z8707780hslq7wp0wa	2021-10-12 13:58:56.801	2021-10-14 08:00:00	Juwan Morgan	1629752	juwan-morgan	6-7	232	16	F	ckurtr74y1131280hsgn5id1b7
ckurtr5zb708480hsx5iw7dwn	2021-10-12 13:58:56.805	2021-10-14 08:00:00	Rudy Gobert	203497	rudy-gobert	7-1	258	27	C	ckurtr74y1131280hsgn5id1b7
ckurtr62u743480hsslxs7ohg	2021-10-12 13:58:57.078	2021-10-14 08:00:00	Jordan Clarkson	203903	jordan-clarkson	6-4	194	00	G	ckurtr74y1131280hsgn5id1b7
ckurtr62w744180hs3n6v08xw	2021-10-12 13:58:57.083	2021-10-14 08:00:00	Joe Ingles	204060	joe-ingles	6-8	220	2	F-G	ckurtr74y1131280hsgn5id1b7
ckurtr5ze709180hsp9v5nvjo	2021-10-12 13:58:56.81	2021-10-14 08:00:00	Rui Hachimura	1629060	rui-hachimura	6-8	230	8	F	ckurtr7501131980hsxu0tclct
ckurtr5zh709880hsjve0d1o9	2021-10-12 13:58:56.814	2021-10-14 08:00:00	Garrison Mathews	1629726	garrison-mathews	6-5	215	24	G	ckurtr7501131980hsxu0tclct
ckurtr679777080hs3npb9hgu	2021-10-12 13:58:57.41	2021-10-14 08:00:00	Timothe Luwawu-Cabarrot	1627789	timothe-luwawu-cabarrot	6-7	220	9	G-F	ckurtr72y1113080hs005x0gxk
ckurtr67h779180hs8k3ab0gr	2021-10-12 13:58:57.423	2021-10-14 08:00:00	Jalen McDaniels	1629667	jalen-mcdaniels	6-9	205	6	F-C	ckurtr7311113780hsgrdqiegk
ckurtr67k779880hs5bolc8w8	2021-10-12 13:58:57.428	2021-10-14 08:00:00	Grant Riller	1630203	grant-riller	6-2	190	7	G	ckurtr7311113780hsgrdqiegk
ckurtr67m780580hsn0o0mtq4	2021-10-12 13:58:57.432	2021-10-14 08:00:00	Thaddeus Young	201152	thaddeus-young	6-8	235	21	F	ckurtr7341114480hs337eaj26
ckurtr67p781280hsqqrk1xtg	2021-10-12 13:58:57.437	2021-10-14 08:00:00	Denzel Valentine	1627756	denzel-valentine	6-4	220	45	G	ckurtr7341114480hs337eaj26
ckurtr630745580hsur7ajarf	2021-10-12 13:58:57.106	2021-10-14 08:00:00	Jeremiah Martin	1629725	jeremiah-martin	6-2	185	3	G	ckurtr7371115180hslnccru8a
ckurtr67r781980hs8z4yg220	2021-10-12 13:58:57.443	2021-10-14 08:00:00	Taurean Prince	1627752	taurean-prince	6-7	218	12	F	ckurtr7371115180hslnccru8a
ckurtr632746280hs8tfakdq0	2021-10-12 13:58:57.115	2021-10-14 08:00:00	Shaquille Harrison	1627885	shaquille-harrison	6-7	190	3	G	ckurtr73c1116580hs3i36jjw5
ckurtr67v783380hsgvd67wsc	2021-10-12 13:58:57.452	2021-10-14 08:00:00	Markus Howard	1630210	markus-howard	5-10	175	00	G	ckurtr73c1116580hs3i36jjw5
ckurtr67y784080hsoxaieb92	2021-10-12 13:58:57.458	2021-10-14 08:00:00	JaMychal Green	203210	jamychal-green	6-8	227	0	F-C	ckurtr73c1116580hs3i36jjw5
ckurtr634746980hszp862u2f	2021-10-12 13:58:57.125	2021-10-14 08:00:00	Kevon Looney	1626172	kevon-looney	6-9	222	5	F	ckurtr73h1117980hsrqsjw8xn
ckurtr636747680hssx789pqb	2021-10-12 13:58:57.129	2021-10-14 08:00:00	Jordan Bell	1628395	jordan-bell	6-8	216	7	F	ckurtr73h1117980hsrqsjw8xn
ckurtr638748380hsvgex3bxk	2021-10-12 13:58:57.147	2021-10-14 08:00:00	Khyri Thomas	1629017	khyri-thomas	6-3	210	13	G	ckurtr73k1118680hs60y14qgi
ckurtr63b749080hs17wryu74	2021-10-12 13:58:57.151	2021-10-14 08:00:00	Oshae Brissett	1629052	oshae-brissett	6-7	210	12	F-G	ckurtr73n1119380hs6h18kxhb
ckurtr63d749780hsrxppqgwu	2021-10-12 13:58:57.156	2021-10-14 08:00:00	Amida Brimah	1628578	amida-brimah	6-10	230	37	C	ckurtr73n1119380hs6h18kxhb
ckurtr63g750480hsvfepykb8	2021-10-12 13:58:57.161	2021-10-14 08:00:00	Marcus Morris Sr.	202694	marcus-morris-sr	6-8	218	8	F	ckurtr73q1120080hsuk9pz8mb
ckurtr63i751180hsmphclp1x	2021-10-12 13:58:57.166	2021-10-14 08:00:00	DeMarcus Cousins	202326	demarcus-cousins	6-10	270	15	C	ckurtr73q1120080hsuk9pz8mb
ckurtr63l751880hs5wnadq5r	2021-10-12 13:58:57.17	2021-10-14 08:00:00	Dennis Schroder	203471	dennis-schroder	6-3	172	17	G	ckurtr73t1120780hsfcm6d1g8
ckurtr63n752580hsjdyahm49	2021-10-12 13:58:57.176	2021-10-14 08:00:00	Tim Frazier	204025	tim-frazier	6-0	170	10	G	ckurtr73w1121480hs5q03bem0
ckurtr63p753280hsfbp478b5	2021-10-12 13:58:57.181	2021-10-14 08:00:00	Jonas Valanciunas	202685	jonas-valanciunas	6-11	265	17	C	ckurtr73w1121480hs5q03bem0
ckurtr63u754680hs5h510ka8	2021-10-12 13:58:57.196	2021-10-14 08:00:00	Precious Achiuwa	1630173	precious-achiuwa	6-8	225	5	F	ckurtr73y1122180hs7mhd2u3c
ckurtr63w755380hs3o6g6yva	2021-10-12 13:58:57.2	2021-10-14 08:00:00	Dewayne Dedmon	203473	dewayne-dedmon	7-0	245	21	C	ckurtr73y1122180hs7mhd2u3c
ckurtr63z756080hsh9h5ej94	2021-10-12 13:58:57.206	2021-10-14 08:00:00	Omer Yurtseven	1630209	omer-yurtseven	7-0	275	77	C	ckurtr73y1122180hs7mhd2u3c
ckurtr641756780hsox4bsfg5	2021-10-12 13:58:57.211	2021-10-14 08:00:00	Elijah Bryant	1629091	elijah-bryant	6-5	210	3	G	ckurtr7411122880hsbsw23one
ckurtr644757480hsmud9nh5g	2021-10-12 13:58:57.215	2021-10-14 08:00:00	Bryn Forbes	1627854	bryn-forbes	6-2	205	7	G	ckurtr7411122880hsbsw23one
ckurtr649758880hss79jugem	2021-10-12 13:58:57.238	2021-10-14 08:00:00	Anthony Edwards	1630162	anthony-edwards	6-4	225	1	G	ckurtr7441123580hswoadqvid
ckurtr64b759580hsj5eb2xh6	2021-10-12 13:58:57.244	2021-10-14 08:00:00	Jaden McDaniels	1630183	jaden-mcdaniels	6-9	185	3	F	ckurtr7441123580hswoadqvid
ckurtr64e760280hsc60kqwn8	2021-10-12 13:58:57.25	2021-10-14 08:00:00	Jarrett Culver	1629633	jarrett-culver	6-6	195	23	G-F	ckurtr7441123580hswoadqvid
ckurtr64i761680hse0nvzt6e	2021-10-12 13:58:57.26	2021-10-14 08:00:00	Didi Louzada	1629712	didi-louzada	6-5	188		G	ckurtr7471124280hshmkzngtt
ckurtr64k762380hsclczwow1	2021-10-12 13:58:57.265	2021-10-14 08:00:00	Naji Marshall	1630230	naji-marshall	6-7	220	8	F	ckurtr7471124280hshmkzngtt
ckurtr64n763080hsvn20w4dx	2021-10-12 13:58:57.27	2021-10-14 08:00:00	Kira Lewis Jr.	1630184	kira-lewis-jr	6-1	170	13	G	ckurtr7471124280hshmkzngtt
ckurtr64r764480hsq3z1428z	2021-10-12 13:58:57.278	2021-10-14 08:00:00	Jared Harper	1629607	jared-harper	5-10	175	0	G	ckurtr74b1124980hs9jiumudw
ckurtr64t765180hs8vgmc8dr	2021-10-12 13:58:57.283	2021-10-14 08:00:00	Theo Pinson	1629033	theo-pinson	6-5	212	21	G-F	ckurtr74b1124980hs9jiumudw
ckurtr64w765880hs80kerrnw	2021-10-12 13:58:57.288	2021-10-14 08:00:00	Svi Mykhailiuk	1629004	svi-mykhailiuk	6-7	205	14	G-F	ckurtr74e1125680hs5fbtikqr
ckurtr64y766580hsjsce9j0g	2021-10-12 13:58:57.293	2021-10-14 08:00:00	Josh Hall	1630221	josh-hall	6-9	190	15	F	ckurtr74e1125680hs5fbtikqr
ckurtr650767280hsw006386r	2021-10-12 13:58:57.297	2021-10-14 08:00:00	R.J. Hampton	1630181	rj-hampton	6-4	175	13	G	ckurtr74g1126380hsi40absdd
ckurtr652767980hsa0ijsnx7	2021-10-12 13:58:57.301	2021-10-14 08:00:00	Chasson Randle	1626184	chasson-randle	6-2	185	25	G	ckurtr74g1126380hsi40absdd
ckurtr654768680hs6se2n6ye	2021-10-12 13:58:57.305	2021-10-14 08:00:00	Wendell Carter Jr.	1628976	wendell-carter-jr	6-10	270	34	C-F	ckurtr74g1126380hsi40absdd
ckurtr656769380hsi6xx1ojq	2021-10-12 13:58:57.31	2021-10-14 08:00:00	Torrey Craig	1628470	torrey-craig	6-7	221	12	F	ckurtr74l1127780hsxilzh94e
ckurtr659770080hsh8ut3nzm	2021-10-12 13:58:57.314	2021-10-14 08:00:00	Carmelo Anthony	2546	carmelo-anthony	6-7	238	00	F	ckurtr74o1128480hsw91nsqm0
ckurtr65e770780hshg2cjppf	2021-10-12 13:58:57.318	2021-10-14 08:00:00	Terence Davis	1629056	terence-davis	6-4	201	9	G	ckurtr74q1129180hszuvk8s9g
ckurtr65g771480hsujvgm0fv	2021-10-12 13:58:57.323	2021-10-14 08:00:00	DeAndre' Bembry	1627761	deandre-bembry	6-5	210	95	G-F	ckurtr74v1130580hsggipc6wc
ckurtr682785480hs666xg500	2021-10-12 13:58:57.485	2021-10-14 08:00:00	Jalen Harris	1630223	jalen-harris	6-5	195	2	G	ckurtr74v1130580hsggipc6wc
ckurtr62y744880hssfdjbbbd	2021-10-12 13:58:57.088	2021-10-14 08:00:00	Matt Thomas	1629744	matt-thomas	6-4	190	21	G	ckurtr74y1131280hsgn5id1b7
ckurtr65i772180hsk4o7lfb1	2021-10-12 13:58:57.328	2021-10-14 08:00:00	Mike Conley	201144	mike-conley	6-1	175	10	G	ckurtr74y1131280hsgn5id1b7
ckurtr66y774280hst03xc2o6	2021-10-12 13:58:57.343	2021-10-14 08:00:00	Chandler Hutchison	1628990	chandler-hutchison	6-6	210	1	F-G	ckurtr7501131980hsxu0tclct
ckurtr671774980hsi5okixau	2021-10-12 13:58:57.348	2021-10-14 08:00:00	Bradley Beal	203078	bradley-beal	6-3	207	3	G	ckurtr7501131980hsxu0tclct
ckurtr6ak811380hs4sttv5pb	2021-10-12 13:58:57.696	2021-10-14 08:00:00	Karim Mane	1630211	karim-mane	6-3	190	4	G	\N
ckurtr6bd820480hs9trx2qse	2021-10-12 13:58:57.729	2021-10-14 08:00:00	LaMarcus Aldridge	200746	lamarcus-aldridge	6-11	250	12	C-F	\N
ckurtr6bv826080hs8ibik6wj	2021-10-12 13:58:57.788	2021-10-14 08:00:00	Will Magnay	1630266	will-magnay	6-10	234	25	C	\N
ckurtr6a9807880hsfjcmcjws	2021-10-12 13:58:57.663	2021-10-14 08:00:00	Kevin Durant	201142	kevin-durant	6-10	240	7	F	ckurtr72y1113080hs005x0gxk
ckurtr6ad809280hs4ut3qqtw	2021-10-12 13:58:57.692	2021-10-14 08:00:00	Jalen Brunson	1628973	jalen-brunson	6-1	190	13	G	ckurtr73a1115880hsxkdan1ud
ckurtr685786180hsmt1ld3r0	2021-10-12 13:58:57.467	2021-10-14 08:00:00	Frank Jackson	1628402	frank-jackson	6-3	205	5	G	ckurtr73f1117280hsgklsbom1
ckurtr688786880hs10jc2r2t	2021-10-12 13:58:57.472	2021-10-14 08:00:00	Andrew Wiggins	203952	andrew-wiggins	6-7	197	22	F	ckurtr73h1117980hsrqsjw8xn
ckurtr6am812080hsvgdvburb	2021-10-12 13:58:57.708	2021-10-14 08:00:00	Klay Thompson	202691	klay-thompson	6-6	215	11	G	ckurtr73h1117980hsrqsjw8xn
ckurtr6ap812780hswkwro28b	2021-10-12 13:58:57.712	2021-10-14 08:00:00	Kelly Oubre Jr.	1626162	kelly-oubre-jr	6-7	203	12	F-G	ckurtr73h1117980hsrqsjw8xn
ckurtr6ar813480hszw26sqhm	2021-10-12 13:58:57.717	2021-10-14 08:00:00	David Nwaba	1628021	david-nwaba	6-5	219	2	G-F	ckurtr73k1118680hs60y14qgi
ckurtr6au814180hsonrvpx0r	2021-10-12 13:58:57.721	2021-10-14 08:00:00	Danuel House Jr.	1627863	danuel-house-jr	6-6	220	4	F-G	ckurtr73k1118680hs60y14qgi
ckurtr68a787580hsrkvdx5vx	2021-10-12 13:58:57.476	2021-10-14 08:00:00	T.J. McConnell	204456	tj-mcconnell	6-1	190	9	G	ckurtr73n1119380hs6h18kxhb
ckurtr68d788280hslm6xpykz	2021-10-12 13:58:57.481	2021-10-14 08:00:00	Myles Turner	1626167	myles-turner	6-11	250	33	C-F	ckurtr73n1119380hs6h18kxhb
ckurtr6ay815580hs2l3l4dnz	2021-10-12 13:58:57.734	2021-10-14 08:00:00	Justin Holiday	203200	justin-holiday	6-6	180	8	F-G	ckurtr73n1119380hs6h18kxhb
ckurtr68f788980hstunnb3fo	2021-10-12 13:58:57.49	2021-10-14 08:00:00	Amir Coffey	1629599	amir-coffey	6-7	210	7	G-F	ckurtr73q1120080hsuk9pz8mb
ckurtr68h789680hsm8ied7ny	2021-10-12 13:58:57.494	2021-10-14 08:00:00	Yogi Ferrell	1627812	yogi-ferrell	6-0	178	11	G	ckurtr73q1120080hsuk9pz8mb
ckurtr6b2816980hsr52cw8mn	2021-10-12 13:58:57.744	2021-10-14 08:00:00	Patrick Patterson	202335	patrick-patterson	6-8	235	54	F	ckurtr73q1120080hsuk9pz8mb
ckurtr6b5817680hsl9qg6nep	2021-10-12 13:58:57.748	2021-10-14 08:00:00	Montrezl Harrell	1626149	montrezl-harrell	6-7	240	15	F-C	ckurtr73t1120780hsfcm6d1g8
ckurtr6b7818380hsn7xsr7nv	2021-10-12 13:58:57.752	2021-10-14 08:00:00	Kostas Antetokounmpo	1628961	kostas-antetokounmpo	6-10	200	37	F	ckurtr73t1120780hsfcm6d1g8
ckurtr6b9819080hsp90yle7r	2021-10-12 13:58:57.757	2021-10-14 08:00:00	Jontay Porter	1629007	jontay-porter	6-11	240	4	C-F	ckurtr73w1121480hs5q03bem0
ckurtr6bb819780hsi5jla77y	2021-10-12 13:58:57.761	2021-10-14 08:00:00	Jaren Jackson Jr.	1628991	jaren-jackson-jr	6-11	242	13	F-C	ckurtr73w1121480hs5q03bem0
ckurtr6bf821180hs1xggzj7v	2021-10-12 13:58:57.775	2021-10-14 08:00:00	Kendrick Nunn	1629134	kendrick-nunn	6-2	190	25	G	ckurtr73y1122180hs7mhd2u3c
ckurtr6bh821880hsv20dmk0t	2021-10-12 13:58:57.779	2021-10-14 08:00:00	Max Strus	1629622	max-strus	6-5	215	31	G-F	ckurtr73y1122180hs7mhd2u3c
ckurtr68j790380hsf9tqs444	2021-10-12 13:58:57.503	2021-10-14 08:00:00	Donte DiVincenzo	1628978	donte-divincenzo	6-4	203	0	G	ckurtr7411122880hsbsw23one
ckurtr68m791080hsrbiuzrlq	2021-10-12 13:58:57.508	2021-10-14 08:00:00	Giannis Antetokounmpo	203507	giannis-antetokounmpo	6-11	242	34	F	ckurtr7411122880hsbsw23one
ckurtr68o791780hsjdt7kkm4	2021-10-12 13:58:57.512	2021-10-14 08:00:00	Jordan McLaughlin	1629162	jordan-mclaughlin	5-11	185	6	G	ckurtr7441123580hswoadqvid
ckurtr68q792480hsaqg50h4g	2021-10-12 13:58:57.517	2021-10-14 08:00:00	Eric Bledsoe	202339	eric-bledsoe	6-1	214	5	G	ckurtr7471124280hshmkzngtt
ckurtr68s793180hsk4n66diq	2021-10-12 13:58:57.522	2021-10-14 08:00:00	Willy Hernangomez	1626195	willy-hernangomez	6-11	250	9	C-F	ckurtr7471124280hshmkzngtt
ckurtr68v793880hsy1yb7h6m	2021-10-12 13:58:57.527	2021-10-14 08:00:00	Norvel Pelle	203658	norvel-pelle	6-10	231	14	C	ckurtr74b1124980hs9jiumudw
ckurtr6bq824680hselmin5ao	2021-10-12 13:58:57.805	2021-10-14 08:00:00	Luca Vildoza	1630492	luca-vildoza	6-3	190		G	ckurtr74b1124980hs9jiumudw
ckurtr6bt825380hsb87684z9	2021-10-12 13:58:57.809	2021-10-14 08:00:00	Frank Ntilikina	1628373	frank-ntilikina	6-4	200	11	G	ckurtr74b1124980hs9jiumudw
ckurtr68y794580hseyiyo3qa	2021-10-12 13:58:57.532	2021-10-14 08:00:00	Jaylen Hoard	1629658	jaylen-hoard	6-8	216	8	F	ckurtr74e1125680hs5fbtikqr
ckurtr6by826780hs0p3d9bge	2021-10-12 13:58:57.813	2021-10-14 08:00:00	Tony Bradley	1628396	tony-bradley	6-10	248	13	C-F	ckurtr74e1125680hs5fbtikqr
ckurtr690795280hsetbbrxrc	2021-10-12 13:58:57.537	2021-10-14 08:00:00	Sindarius Thornwell	1628414	sindarius-thornwell	6-4	215	15	G	ckurtr74g1126380hsi40absdd
ckurtr693795980hsvcxhi2hh	2021-10-12 13:58:57.543	2021-10-14 08:00:00	Ignas Brazdeikis	1629649	ignas-brazdeikis	6-6	221	17	F	ckurtr74g1126380hsi40absdd
ckurtr695796680hstze4knnl	2021-10-12 13:58:57.554	2021-10-14 08:00:00	Rayjon Tucker	1629730	rayjon-tucker	6-3	209	9	G	ckurtr74j1127080hss2acd21l
ckurtr698797380hsrihho65a	2021-10-12 13:58:57.56	2021-10-14 08:00:00	Gary Clark	1629109	gary-clark	6-6	225	12	F	ckurtr74j1127080hss2acd21l
ckurtr69b798080hsl9w2y61c	2021-10-12 13:58:57.572	2021-10-14 08:00:00	Jevon Carter	1628975	jevon-carter	6-1	200	4	G	ckurtr74l1127780hsxilzh94e
ckurtr69d798780hs2tgujwd9	2021-10-12 13:58:57.577	2021-10-14 08:00:00	Mikal Bridges	1628969	mikal-bridges	6-6	209	25	F	ckurtr74l1127780hsxilzh94e
ckurtr69g799480hsva0en72h	2021-10-12 13:58:57.583	2021-10-14 08:00:00	Nassir Little	1629642	nassir-little	6-5	220	9	F-G	ckurtr74o1128480hsw91nsqm0
ckurtr69i800180hsxmh9qnhg	2021-10-12 13:58:57.588	2021-10-14 08:00:00	T.J. Leaf	1628388	tj-leaf	6-10	222	18	F	ckurtr74o1128480hsw91nsqm0
ckurtr69n801580hs1a9x2zp5	2021-10-12 13:58:57.603	2021-10-14 08:00:00	Tyrese Haliburton	1630169	tyrese-haliburton	6-5	185	0	G	ckurtr74q1129180hszuvk8s9g
ckurtr69p802280hshwqqdlan	2021-10-12 13:58:57.608	2021-10-14 08:00:00	Damian Jones	1627745	damian-jones	6-11	245	15	C	ckurtr74q1129180hszuvk8s9g
ckurtr69s802980hsw08zjizf	2021-10-12 13:58:57.613	2021-10-14 08:00:00	Louis King	1629663	louis-king	6-7	205	23	F	ckurtr74q1129180hszuvk8s9g
ckurtr69u803680hsfqz9858e	2021-10-12 13:58:57.623	2021-10-14 08:00:00	Gorgui Dieng	203476	gorgui-dieng	6-10	252	7	C	ckurtr74t1129880hsjudk6xi2
ckurtr69x804380hs69sdu62a	2021-10-12 13:58:57.628	2021-10-14 08:00:00	Freddie Gillespie	1630273	freddie-gillespie	6-9	245		F	ckurtr74v1130580hsggipc6wc
ckurtr6a0805080hswa7umy7i	2021-10-12 13:58:57.632	2021-10-14 08:00:00	Chris Boucher	1628449	chris-boucher	6-9	200	25	F-C	ckurtr74v1130580hsggipc6wc
ckurtr6a2805780hsqhrojsh2	2021-10-12 13:58:57.636	2021-10-14 08:00:00	Caleb Homesley	1630258	caleb-homesley	6-6	205		G	ckurtr7501131980hsxu0tclct
ckurtr6a4806480hsealpiou1	2021-10-12 13:58:57.642	2021-10-14 08:00:00	Thomas Bryant	1628418	thomas-bryant	6-10	248	13	C-F	ckurtr7501131980hsxu0tclct
ckurtr6cr835180hsnjmetrhu	2021-10-12 13:58:57.864	2021-10-14 08:00:00	Mason Jones	1630222	mason-jones	6-4	200	9	G	\N
ckurtr6d0837980hsw823ol49	2021-10-12 13:58:57.889	2021-10-14 08:00:00	Justin Patton	1628383	justin-patton	6-11	241	26	C	\N
ckurtr6d2838680hssu4hsamr	2021-10-12 13:58:57.894	2021-10-14 08:00:00	Terrance Ferguson	1628390	terrance-ferguson	6-6	190	23	G	\N
ckurtr6d4839380hsclmhoodq	2021-10-12 13:58:58.149	2021-10-14 08:00:00	Jayson Tatum	1628369	jayson-tatum	6-8	210	0	F-G	ckurtr72t1112380hs8x0kp6w2
ckurtr6d6840080hsn0euou74	2021-10-12 13:58:57.924	2021-10-14 08:00:00	Jaylen Brown	1627759	jaylen-brown	6-6	223	7	G-F	ckurtr72t1112380hs8x0kp6w2
ckurtr6d8840780hsq6dum4v2	2021-10-12 13:58:57.928	2021-10-14 08:00:00	Chris Chiozza	1629185	chris-chiozza	5-11	175	4	G	ckurtr72y1113080hs005x0gxk
ckurtr6db841480hspdpv9a63	2021-10-12 13:58:58.153	2021-10-14 08:00:00	DeAndre Jordan	201599	deandre-jordan	6-11	265	6	C	ckurtr72y1113080hs005x0gxk
ckurtr6dd842180hs7xmz1ggw	2021-10-12 13:58:57.932	2021-10-14 08:00:00	Spencer Dinwiddie	203915	spencer-dinwiddie	6-5	215	26	G	ckurtr72y1113080hs005x0gxk
ckurtr6df842880hsbrhjno38	2021-10-12 13:58:57.936	2021-10-14 08:00:00	Terry Rozier	1626179	terry-rozier	6-1	190	3	G	ckurtr7311113780hsgrdqiegk
ckurtr6di843580hsoms7h0di	2021-10-12 13:58:57.942	2021-10-14 08:00:00	Nate Darling	1630268	nate-darling	6-6	200	30	G	ckurtr7311113780hsgrdqiegk
ckurtr6dl844280hsswbtcmrt	2021-10-12 13:58:57.946	2021-10-14 08:00:00	Al-Farouq Aminu	202329	al-farouq-aminu	6-8	220	5	F	ckurtr7341114480hs337eaj26
ckurtr6dn844980hsrurbo1l1	2021-10-12 13:58:57.95	2021-10-14 08:00:00	Adam Mokoka	1629690	adam-mokoka	6-4	190	20	G	ckurtr7341114480hs337eaj26
ckurtr6dp845680hs52023ppg	2021-10-12 13:58:57.956	2021-10-14 08:00:00	Darius Garland	1629636	darius-garland	6-1	192	10	G	ckurtr7371115180hslnccru8a
ckurtr6dr846380hs316t5zqp	2021-10-12 13:58:57.96	2021-10-14 08:00:00	Damyean Dotson	1628422	damyean-dotson	6-5	210	21	G	ckurtr7371115180hslnccru8a
ckurtr6dt847080hsin9cl6nd	2021-10-12 13:58:57.969	2021-10-14 08:00:00	Facundo Campazzo	1630267	facundo-campazzo	5-10	195	7	G	ckurtr73c1116580hs3i36jjw5
ckurtr6ej855480hs5j6xp6wk	2021-10-12 13:58:57.973	2021-10-14 08:00:00	Vlatko Cancar	1628427	vlatko-cancar	6-8	236	31	F	ckurtr73c1116580hs3i36jjw5
ckurtr6el856180hso44jvthk	2021-10-12 13:58:57.978	2021-10-14 08:00:00	Aaron Gordon	203932	aaron-gordon	6-8	235	50	F	ckurtr73c1116580hs3i36jjw5
ckurtr6eo856880hswt4hd573	2021-10-12 13:58:57.982	2021-10-14 08:00:00	Hamidou Diallo	1628977	hamidou-diallo	6-5	202	6	G	ckurtr73f1117280hsgklsbom1
ckurtr6eq857580hsiqzrnu2b	2021-10-12 13:58:57.986	2021-10-14 08:00:00	Mason Plumlee	203486	mason-plumlee	6-11	254	24	F-C	ckurtr73f1117280hsgklsbom1
ckurtr6es858280hsu9ybqtyj	2021-10-12 13:58:57.99	2021-10-14 08:00:00	Alen Smailagic	1629346	alen-smailagic	6-10	215	6	F	ckurtr73h1117980hsrqsjw8xn
ckurtr6eu858980hs99au3nl6	2021-10-12 13:58:57.995	2021-10-14 08:00:00	Juan Toscano-Anderson	1629308	juan-toscano-anderson	6-6	209	95	F	ckurtr73h1117980hsrqsjw8xn
ckurtr6ex859680hsxpgtgjrb	2021-10-12 13:58:57.999	2021-10-14 08:00:00	D.J. Augustin	201571	dj-augustin	5-11	183	14	G	ckurtr73k1118680hs60y14qgi
ckurtr6ez860380hsnkys533p	2021-10-12 13:58:58.003	2021-10-14 08:00:00	Malcolm Brogdon	1627763	malcolm-brogdon	6-5	229	7	G	ckurtr73n1119380hs6h18kxhb
ckurtr6f2861080hsdxngc03a	2021-10-12 13:58:58.008	2021-10-14 08:00:00	Jay Scrubb	1630206	jay-scrubb	6-5	220	0	G	ckurtr73q1120080hsuk9pz8mb
ckurtr6f5861780hsjdkq0y4o	2021-10-12 13:58:58.012	2021-10-14 08:00:00	Justise Winslow	1626159	justise-winslow	6-6	222	7	F-G	ckurtr73w1121480hs5q03bem0
ckurtr6f7862480hsd1xjqf1l	2021-10-12 13:58:58.021	2021-10-14 08:00:00	Trevor Ariza	2772	trevor-ariza	6-8	215	8	F	ckurtr73y1122180hs7mhd2u3c
ckurtr6fa863180hstoncw2oo	2021-10-12 13:58:58.025	2021-10-14 08:00:00	Andre Iguodala	2738	andre-iguodala	6-6	215	28	G-F	ckurtr73y1122180hs7mhd2u3c
ckurtr6fc863880hsnkhoxjfs	2021-10-12 13:58:58.034	2021-10-14 08:00:00	Brook Lopez	201572	brook-lopez	7-0	282	11	C	ckurtr7411122880hsbsw23one
ckurtr6fe864580hs30jvibo8	2021-10-12 13:58:58.038	2021-10-14 08:00:00	Jake Layman	1627774	jake-layman	6-8	209	10	F	ckurtr7441123580hswoadqvid
ckurtr6fg865280hsshkp1wvj	2021-10-12 13:58:58.043	2021-10-14 08:00:00	Nickeil Alexander-Walker	1629638	nickeil-alexander-walker	6-6	205	6	G	ckurtr7471124280hshmkzngtt
ckurtr6fj865980hsasei0c08	2021-10-12 13:58:58.048	2021-10-14 08:00:00	Mitchell Robinson	1629011	mitchell-robinson	7-0	240	23	C-F	ckurtr74b1124980hs9jiumudw
ckurtr6c0827480hsgw0ium2s	2021-10-12 13:58:57.818	2021-10-14 08:00:00	Ty Jerome	1629660	ty-jerome	6-5	195	16	G-F	ckurtr74e1125680hs5fbtikqr
ckurtr6c2828180hsu3ugwe4c	2021-10-12 13:58:57.822	2021-10-14 08:00:00	Charlie Brown Jr.	1629718	charlie-brown-jr	6-6	199	44	G	ckurtr74e1125680hs5fbtikqr
ckurtr6fl866680hs9vfw80mz	2021-10-12 13:58:58.052	2021-10-14 08:00:00	Gabriel Deck	1630466	gabriel-deck	6-6	231	6	F	ckurtr74e1125680hs5fbtikqr
ckurtr6fn867380hsxcnxfd6q	2021-10-12 13:58:58.056	2021-10-14 08:00:00	Darius Bazley	1629647	darius-bazley	6-8	208	7	F-G	ckurtr74e1125680hs5fbtikqr
ckurtr6c5828880hsetp4a1i6	2021-10-12 13:58:57.827	2021-10-14 08:00:00	Jonathan Isaac	1628371	jonathan-isaac	6-11	230	1	F	ckurtr74g1126380hsi40absdd
ckurtr6fp868080hsplny36wp	2021-10-12 13:58:58.066	2021-10-14 08:00:00	James Ennis III	203516	james-ennis-iii	6-6	215	11	F	ckurtr74g1126380hsi40absdd
ckurtr6c8829580hsp28mkscu	2021-10-12 13:58:57.831	2021-10-14 08:00:00	Joel Embiid	203954	joel-embiid	7-0	280	21	C-F	ckurtr74j1127080hss2acd21l
ckurtr6ca830280hsrez833kg	2021-10-12 13:58:57.835	2021-10-14 08:00:00	Devin Booker	1626164	devin-booker	6-5	206	1	G	ckurtr74l1127780hsxilzh94e
ckurtr6cd830980hs9jprdiyc	2021-10-12 13:58:57.84	2021-10-14 08:00:00	Frank Kaminsky	1626163	frank-kaminsky	7-0	240	8	F-C	ckurtr74l1127780hsxilzh94e
ckurtr6cf831680hsywfkausj	2021-10-12 13:58:57.845	2021-10-14 08:00:00	Zach Collins	1628380	zach-collins	6-11	250	33	F-C	ckurtr74o1128480hsw91nsqm0
ckurtr6ci832380hs8xxsevdk	2021-10-12 13:58:57.85	2021-10-14 08:00:00	Jahmi'us Ramsey	1630186	jahmius-ramsey	6-3	190	3	G	ckurtr74q1129180hszuvk8s9g
ckurtr6ck833080hsq7j09ofi	2021-10-12 13:58:57.855	2021-10-14 08:00:00	Hassan Whiteside	202355	hassan-whiteside	7-0	265	20	C	ckurtr74q1129180hszuvk8s9g
ckurtr6cm833780hs3xrd58h7	2021-10-12 13:58:57.859	2021-10-14 08:00:00	Lonnie Walker IV	1629022	lonnie-walker-iv	6-4	204	1	G-F	ckurtr74t1129880hsjudk6xi2
ckurtr6co834480hsut99pflb	2021-10-12 13:58:57.868	2021-10-14 08:00:00	Quinndary Weatherspoon	1629683	quinndary-weatherspoon	6-3	205	15	G	ckurtr74t1129880hsjudk6xi2
ckurtr6ct835880hsyruombxv	2021-10-12 13:58:57.877	2021-10-14 08:00:00	OG Anunoby	1628384	og-anunoby	6-7	232	3	F	ckurtr74v1130580hsggipc6wc
ckurtr6cv836580hsg7synvst	2021-10-12 13:58:57.881	2021-10-14 08:00:00	Stanley Johnson	1626169	stanley-johnson	6-6	242	5	F-G	ckurtr74v1130580hsggipc6wc
ckurtr6cy837280hs7hotli9t	2021-10-12 13:58:57.885	2021-10-14 08:00:00	Isaac Bonga	1629067	isaac-bonga	6-8	180	17	G	ckurtr7501131980hsxu0tclct
ckurtr6hx894680hsm1wpyg5g	2021-10-12 13:58:56.575	2021-10-14 08:00:00	Reggie Perry	1629617	reggie-perry	6-8	250	0	F-C	ckurtr72y1113080hs005x0gxk
ckurtr6i0895380hskpvubrpd	2021-10-12 13:58:56.579	2021-10-14 08:00:00	Bruce Brown	1628971	bruce-brown	6-4	202	1	G-F	ckurtr72y1113080hs005x0gxk
ckurtr6i2896080hs1yoxp6eq	2021-10-12 13:58:56.584	2021-10-14 08:00:00	Jeff Green	201145	jeff-green	6-8	235	8	F	ckurtr72y1113080hs005x0gxk
ckurtr6j6908680hshg7zv646	2021-10-12 13:58:57.668	2021-10-14 08:00:00	Nicolas Claxton	1629651	nicolas-claxton	6-11	215	33	F-C	ckurtr72y1113080hs005x0gxk
ckurtr6gt882080hsmv34n5qw	2021-10-12 13:58:55.802	2021-10-14 08:00:00	Brad Wanamaker	202954	brad-wanamaker	6-3	210	9	G	ckurtr7311113780hsgrdqiegk
ckurtr6gv882780hsn4xyufi8	2021-10-12 13:58:55.807	2021-10-14 08:00:00	Cody Martin	1628998	cody-martin	6-5	205	11	F	ckurtr7311113780hsgrdqiegk
ckurtr6gx883480hsy0u7ahti	2021-10-12 13:58:55.811	2021-10-14 08:00:00	Gordon Hayward	202330	gordon-hayward	6-7	225	20	F	ckurtr7311113780hsgrdqiegk
ckurtr6gz884180hsowijrxzy	2021-10-12 13:58:55.816	2021-10-14 08:00:00	P.J. Washington	1629023	pj-washington	6-7	230	25	F	ckurtr7311113780hsgrdqiegk
ckurtr6id898880hs0qpd6tfw	2021-10-12 13:58:56.848	2021-10-14 08:00:00	Nick Richards	1630208	nick-richards	7-0	245	14	C	ckurtr7311113780hsgrdqiegk
ckurtr6il901680hsq98bqnfy	2021-10-12 13:58:57.101	2021-10-14 08:00:00	Cody Zeller	203469	cody-zeller	6-11	240	40	F-C	ckurtr7311113780hsgrdqiegk
ckurtr6i5896780hswa3zvogc	2021-10-12 13:58:56.61	2021-10-14 08:00:00	Zach LaVine	203897	zach-lavine	6-5	200	8	G-F	ckurtr7341114480hs337eaj26
ckurtr6i8897480hsap0watsc	2021-10-12 13:58:56.618	2021-10-14 08:00:00	Ryan Arcidiacono	1627853	ryan-arcidiacono	6-3	195	51	G	ckurtr7341114480hs337eaj26
ckurtr6j9909380hsupyi4y7s	2021-10-12 13:58:57.673	2021-10-14 08:00:00	Troy Brown Jr.	1628972	troy-brown-jr	6-6	215	7	G-F	ckurtr7341114480hs337eaj26
ckurtr6h1884880hs0jurup1e	2021-10-12 13:58:55.879	2021-10-14 08:00:00	Luka Doncic	1629029	luka-doncic	6-7	230	77	F-G	ckurtr73a1115880hsxkdan1ud
ckurtr6if899580hsr84smgel	2021-10-12 13:58:56.866	2021-10-14 08:00:00	Tim Hardaway Jr.	203501	tim-hardaway-jr	6-5	205	11	G-F	ckurtr73a1115880hsxkdan1ud
ckurtr6ih900280hs07d2bcil	2021-10-12 13:58:56.872	2021-10-14 08:00:00	Nate Hinton	1630207	nate-hinton	6-5	210	14	G-F	ckurtr73a1115880hsxkdan1ud
ckurtr6ij900980hsm054e7ck	2021-10-12 13:58:56.876	2021-10-14 08:00:00	Maxi Kleber	1628467	maxi-kleber	6-10	240	42	F	ckurtr73a1115880hsxkdan1ud
ckurtr6io902380hspid81kkh	2021-10-12 13:58:57.111	2021-10-14 08:00:00	Boban Marjanovic	1626246	boban-marjanovic	7-4	290	51	C	ckurtr73a1115880hsxkdan1ud
ckurtr6h3885580hs0g3e6k3n	2021-10-12 13:58:55.907	2021-10-14 08:00:00	PJ Dozier	1628408	pj-dozier	6-6	205	35	G-F	ckurtr73c1116580hs3i36jjw5
ckurtr6hi889780hsc1q8tlez	2021-10-12 13:58:56.34	2021-10-14 08:00:00	Cory Joseph	202709	cory-joseph	6-3	200	18	G	ckurtr73f1117280hsgklsbom1
ckurtr6iq903080hsu61pmatd	2021-10-12 13:58:57.12	2021-10-14 08:00:00	Killian Hayes	1630165	killian-hayes	6-5	195	7	G	ckurtr73f1117280hsgklsbom1
ckurtr6hk890480hsb5aeqqcj	2021-10-12 13:58:56.364	2021-10-14 08:00:00	Stephen Curry	201939	stephen-curry	6-3	185	30	G	ckurtr73h1117980hsrqsjw8xn
ckurtr6h5886280hs93qez79h	2021-10-12 13:58:56.069	2021-10-14 08:00:00	Avery Bradley	202340	avery-bradley	6-3	180	9	G	ckurtr73k1118680hs60y14qgi
ckurtr6is903780hsa8etv6jk	2021-10-12 13:58:57.135	2021-10-14 08:00:00	Kevin Porter Jr.	1629645	kevin-porter-jr	6-4	203	3	G-F	ckurtr73k1118680hs60y14qgi
ckurtr6iu904480hsbs9yrqik	2021-10-12 13:58:57.141	2021-10-14 08:00:00	Armoni Brooks	1629717	armoni-brooks	6-3	195	7	G	ckurtr73k1118680hs60y14qgi
ckurtr6ia898180hs30u3gjcd	2021-10-12 13:58:56.691	2021-10-14 08:00:00	Kelan Martin	1629103	kelan-martin	6-5	230	21	F	ckurtr73n1119380hs6h18kxhb
ckurtr6hm891180hsobf83bxx	2021-10-12 13:58:56.403	2021-10-14 08:00:00	Paul George	202331	paul-george	6-8	220	13	F	ckurtr73q1120080hsuk9pz8mb
ckurtr6ho891880hs9yq2ou8b	2021-10-12 13:58:56.407	2021-10-14 08:00:00	Patrick Beverley	201976	patrick-beverley	6-1	180	21	G	ckurtr73q1120080hsuk9pz8mb
ckurtr6j2907280hsspigp6bu	2021-10-12 13:58:57.498	2021-10-14 08:00:00	Nicolas Batum	201587	nicolas-batum	6-8	230	33	G-F	ckurtr73q1120080hsuk9pz8mb
ckurtr6h7886980hsw8lrpaev	2021-10-12 13:58:56.096	2021-10-14 08:00:00	Wesley Matthews	202083	wesley-matthews	6-4	220	9	G	ckurtr73t1120780hsfcm6d1g8
ckurtr6ha887680hsx2gszq7s	2021-10-12 13:58:56.1	2021-10-14 08:00:00	Jared Dudley	201162	jared-dudley	6-6	237	10	F	ckurtr73t1120780hsfcm6d1g8
ckurtr6gp880680hs1kb70zcm	2021-10-12 13:58:58.158	2021-10-14 08:00:00	Immanuel Quickley	1630193	immanuel-quickley	6-3	190	5	G	ckurtr74b1124980hs9jiumudw
ckurtr6fr868780hss53orjji	2021-10-12 13:58:58.07	2021-10-14 08:00:00	Otto Porter Jr.	203490	otto-porter-jr	6-8	198	22	F	ckurtr74g1126380hsi40absdd
ckurtr6fu869480hsv7wp7d0b	2021-10-12 13:58:58.074	2021-10-14 08:00:00	Terrence Ross	203082	terrence-ross	6-6	206	31	G-F	ckurtr74g1126380hsi40absdd
ckurtr6fw870180hs3n7tj09c	2021-10-12 13:58:58.078	2021-10-14 08:00:00	Matisse Thybulle	1629680	matisse-thybulle	6-5	201	22	G-F	ckurtr74j1127080hss2acd21l
ckurtr6fy870880hsmoqvz5qf	2021-10-12 13:58:58.083	2021-10-14 08:00:00	Ty-Shon Alexander	1630234	ty-shon-alexander	6-3	195	0	G	ckurtr74l1127780hsxilzh94e
ckurtr6g0871580hsx3fdhu7s	2021-10-12 13:58:58.087	2021-10-14 08:00:00	Abdel Nader	1627846	abdel-nader	6-5	225	11	F	ckurtr74l1127780hsxilzh94e
ckurtr6g2872280hs96yh2ubd	2021-10-12 13:58:58.091	2021-10-14 08:00:00	Anfernee Simons	1629014	anfernee-simons	6-3	181	1	G	ckurtr74o1128480hsw91nsqm0
ckurtr6g4872980hsogete698	2021-10-12 13:58:58.095	2021-10-14 08:00:00	Rondae Hollis-Jefferson	1626178	rondae-hollis-jefferson	6-6	217	2	F	ckurtr74o1128480hsw91nsqm0
ckurtr6g6873680hsr2higd0p	2021-10-12 13:58:58.101	2021-10-14 08:00:00	Keljin Blevins	1629833	keljin-blevins	6-4	200	21	G	ckurtr74o1128480hsw91nsqm0
ckurtr6g8874380hsklybbrod	2021-10-12 13:58:58.105	2021-10-14 08:00:00	DaQuan Jeffries	1629610	daquan-jeffries	6-5	230	55	G-F	ckurtr74t1129880hsjudk6xi2
ckurtr6ga875080hsjiag4te3	2021-10-12 13:58:58.109	2021-10-14 08:00:00	Yuta Watanabe	1629139	yuta-watanabe	6-9	215	18	G-F	ckurtr74v1130580hsggipc6wc
ckurtr6gc875780hsle3bthl3	2021-10-12 13:58:58.114	2021-10-14 08:00:00	Rodney Hood	203918	rodney-hood	6-8	208	32	G-F	ckurtr74v1130580hsggipc6wc
ckurtr6gg877180hsxnjszlei	2021-10-12 13:58:58.122	2021-10-14 08:00:00	Jarrell Brantley	1629714	jarrell-brantley	6-5	250	5	F	ckurtr74y1131280hsgn5id1b7
ckurtr6gi877880hsoug6d6o9	2021-10-12 13:58:58.127	2021-10-14 08:00:00	Bojan Bogdanovic	202711	bojan-bogdanovic	6-7	226	44	F	ckurtr74y1131280hsgn5id1b7
ckurtr6gk878580hscebfqs4q	2021-10-12 13:58:58.131	2021-10-14 08:00:00	Ersan Ilyasova	101141	ersan-ilyasova	6-9	235	77	F	ckurtr74y1131280hsgn5id1b7
ckurtr6gl879280hss9nz7qzw	2021-10-12 13:58:58.135	2021-10-14 08:00:00	Russell Westbrook	201566	russell-westbrook	6-3	200	4	G	ckurtr7501131980hsxu0tclct
ckurtr6gn879980hs1s98zabd	2021-10-12 13:58:58.14	2021-10-14 08:00:00	Robin Lopez	201577	robin-lopez	7-0	281	15	C	ckurtr7501131980hsxu0tclct
ckurtr6dv847780hsuv5fiwuy	2021-10-12 13:58:57.898	2021-10-14 08:00:00	Brandon Goodwin	1629164	brandon-goodwin	6-0	180	0	G	ckurtr71v1111680hso3ir0d8j
ckurtr6dx848480hskv2h8q6j	2021-10-12 13:58:56.029	2021-10-14 08:00:00	Tony Snell	203503	tony-snell	6-6	213	19	G	ckurtr71v1111680hso3ir0d8j
ckurtr6dz849180hsufo78459	2021-10-12 13:58:56.296	2021-10-14 08:00:00	Clint Capela	203991	clint-capela	6-10	240	15	C	ckurtr71v1111680hso3ir0d8j
ckurtr6e1849880hs175c5tjj	2021-10-12 13:58:57.097	2021-10-14 08:00:00	Nathan Knight	1630233	nathan-knight	6-10	253	1	F-C	ckurtr71v1111680hso3ir0d8j
ckurtr6e3850580hsbrjkpbbu	2021-10-12 13:58:56.828	2021-10-14 08:00:00	Kris Dunn	1627739	kris-dunn	6-3	205	32	G	ckurtr71v1111680hso3ir0d8j
ckurtr6e6851280hsigaj5uez	2021-10-12 13:58:57.375	2021-10-14 08:00:00	Kevin Huerter	1628989	kevin-huerter	6-7	190	3	G-F	ckurtr71v1111680hso3ir0d8j
ckurtr6e8851980hsxp5zn3a1	2021-10-12 13:58:56.024	2021-10-14 08:00:00	Lou Williams	101150	lou-williams	6-1	175	6	G	ckurtr71v1111680hso3ir0d8j
ckurtr6ea852680hszgdaiv71	2021-10-12 13:58:57.384	2021-10-14 08:00:00	Bogdan Bogdanovic	203992	bogdan-bogdanovic	6-6	220	13	G	ckurtr71v1111680hso3ir0d8j
ckurtr6ec853380hsg20jeui7	2021-10-12 13:58:57.388	2021-10-14 08:00:00	Onyeka Okongwu	1630168	onyeka-okongwu	6-8	235	17	F-C	ckurtr71v1111680hso3ir0d8j
ckurtr6ee854080hs28xa3loj	2021-10-12 13:58:57.903	2021-10-14 08:00:00	Skylar Mays	1630219	skylar-mays	6-4	205	4	G	ckurtr71v1111680hso3ir0d8j
ckurtr6eg854780hsqjggohnj	2021-10-12 13:58:57.911	2021-10-14 08:00:00	Solomon Hill	203524	solomon-hill	6-6	226	18	F	ckurtr71v1111680hso3ir0d8j
ckurtr6jf911480hs9ft2ykwo	2021-10-12 13:58:57.915	2021-10-14 08:00:00	John Collins	1628381	john-collins	6-9	235	20	F-C	ckurtr71v1111680hso3ir0d8j
ckurtr6ja910080hs988kcjrq	2021-10-12 13:58:57.678	2021-10-14 08:00:00	Nikola Vucevic	202696	nikola-vucevic	6-11	260	9	C	ckurtr7341114480hs337eaj26
ckurtr6jd910780hsauv7kclv	2021-10-12 13:58:57.687	2021-10-14 08:00:00	Larry Nance Jr.	1626204	larry-nance-jr	6-7	245	22	F-C	ckurtr7371115180hslnccru8a
ckurtr6jm913580hspvfvtped	2021-10-12 13:58:57.965	2021-10-14 08:00:00	Jarrett Allen	1628386	jarrett-allen	6-11	243	31	C	ckurtr7371115180hslnccru8a
ckurtr6k2919180hsh6952rva	2021-10-12 13:58:57.191	2021-10-14 08:00:00	Sean McDermott	1630253	sean-mcdermott	6-6	195	30	F	ckurtr73w1121480hs5q03bem0
ckurtr6kg923380hs6bsfaen6	2021-10-12 13:58:57.766	2021-10-14 08:00:00	Killian Tillie	1629681	killian-tillie	6-9	220	35	F-C	ckurtr73w1121480hs5q03bem0
ckurtr6kj924080hssc23dzbp	2021-10-12 13:58:57.77	2021-10-14 08:00:00	John Konchar	1629723	john-konchar	6-5	210	46	G	ckurtr73w1121480hs5q03bem0
ckurtr6kn925480hskjqoi3bj	2021-10-12 13:58:58.016	2021-10-14 08:00:00	Dillon Brooks	1628415	dillon-brooks	6-7	225	24	G-F	ckurtr73w1121480hs5q03bem0
ckurtr6jw917080hszj3oecdo	2021-10-12 13:58:56.732	2021-10-14 08:00:00	Udonis Haslem	2617	udonis-haslem	6-8	235	40	F	ckurtr73y1122180hs7mhd2u3c
ckurtr6kq926180hspj3a4ad6	2021-10-12 13:58:58.029	2021-10-14 08:00:00	Nemanja Bjelica	202357	nemanja-bjelica	6-10	234	70	F	ckurtr73y1122180hs7mhd2u3c
ckurtr6l0928980hsdiu84j38	2021-10-12 13:58:57.224	2021-10-14 08:00:00	Sam Merrill	1630241	sam-merrill	6-4	205	15	G	ckurtr7411122880hsbsw23one
ckurtr6l2929680hsihs2slgm	2021-10-12 13:58:57.229	2021-10-14 08:00:00	Jrue Holiday	201950	jrue-holiday	6-3	205	21	G	ckurtr7411122880hsbsw23one
ckurtr6l5930380hslikm617f	2021-10-12 13:58:57.233	2021-10-14 08:00:00	Axel Toupane	1626253	axel-toupane	6-7	210	66	G-F	ckurtr7411122880hsbsw23one
ckurtr6la931780hs9abs6zk1	2021-10-12 13:58:57.801	2021-10-14 08:00:00	Thanasis Antetokounmpo	203648	thanasis-antetokounmpo	6-6	219	43	F	ckurtr7411122880hsbsw23one
ckurtr6lc932480hs7jzl1zsw	2021-10-12 13:58:56.138	2021-10-14 08:00:00	Ricky Rubio	201937	ricky-rubio	6-3	190	9	G	ckurtr7441123580hswoadqvid
ckurtr6le933180hsc0esnpkb	2021-10-12 13:58:56.142	2021-10-14 08:00:00	Ed Davis	202334	ed-davis	6-9	218	17	C-F	ckurtr7441123580hswoadqvid
ckurtr6lh933880hsuj1z8nao	2021-10-12 13:58:56.148	2021-10-14 08:00:00	Josh Okogie	1629006	josh-okogie	6-4	213	20	G	ckurtr7441123580hswoadqvid
ckurtr6lj934580hswdzg0kve	2021-10-12 13:58:56.153	2021-10-14 08:00:00	Juancho Hernangomez	1627823	juancho-hernangomez	6-9	214	41	F	ckurtr7441123580hswoadqvid
ckurtr6lr937380hsj1owq0xv	2021-10-12 13:58:58.061	2021-10-14 08:00:00	Kemba Walker	202689	kemba-walker	6-0	184	8	G	ckurtr74e1125680hs5fbtikqr
ckurtr6lu938080hshr0mgdhy	2021-10-12 13:58:58.163	2021-10-14 08:00:00	Shai Gilgeous-Alexander	1628983	shai-gilgeous-alexander	6-6	180	2	G-F	ckurtr74e1125680hs5fbtikqr
ckurtr6ke922680hs36mvfgzd	2021-10-12 13:58:57.548	2021-10-14 08:00:00	Markelle Fultz	1628365	markelle-fultz	6-3	209	20	G	ckurtr74g1126380hsi40absdd
ckurtr6kt926880hsvd6flbuq	2021-10-12 13:58:58.167	2021-10-14 08:00:00	Michael Carter-Williams	203487	michael-carter-williams	6-5	190	7	G	ckurtr74g1126380hsi40absdd
ckurtr6lw938780hs1v4y3v9b	2021-10-12 13:58:57.566	2021-10-14 08:00:00	Anthony Tolliver	201229	anthony-tolliver	6-8	240	43	F	ckurtr74j1127080hss2acd21l
ckurtr6ll935280hs0w0y4lg2	2021-10-12 13:58:56.24	2021-10-14 08:00:00	Jae Crowder	203109	jae-crowder	6-6	235	99	F	ckurtr74l1127780hsxilzh94e
ckurtr6ln935980hs2409vi9c	2021-10-12 13:58:57.598	2021-10-14 08:00:00	Norman Powell	1626181	norman-powell	6-3	215	24	G	ckurtr74o1128480hsw91nsqm0
ckurtr6lp936680hsrj27cat7	2021-10-12 13:58:58.172	2021-10-14 08:00:00	Damian Lillard	203081	damian-lillard	6-2	195	0	G	ckurtr74o1128480hsw91nsqm0
ckurtr6kv927580hsuqfynt6b	2021-10-12 13:58:56.27	2021-10-14 08:00:00	Buddy Hield	1627741	buddy-hield	6-4	220	24	G	ckurtr74q1129180hszuvk8s9g
ckurtr6ky928280hsw00s26yo	2021-10-12 13:58:57.038	2021-10-14 08:00:00	Harrison Barnes	203084	harrison-barnes	6-8	225	40	F	ckurtr74q1129180hszuvk8s9g
ckurtr6jy917780hsez06l3w0	2021-10-12 13:58:56.778	2021-10-14 08:00:00	Trey Lyles	1626168	trey-lyles	6-9	234	41	F	ckurtr74t1129880hsjudk6xi2
ckurtr6k0918480hs2n4d4rwd	2021-10-12 13:58:57.061	2021-10-14 08:00:00	Luka Samanic	1629677	luka-samanic	6-10	227	19	F	ckurtr74t1129880hsjudk6xi2
ckurtr6kl924780hs5pe7zpob	2021-10-12 13:58:57.872	2021-10-14 08:00:00	Jakob Poeltl	1627751	jakob-poeltl	7-1	245	25	C	ckurtr74t1129880hsjudk6xi2
ckurtr6ly939480hsfdgaj999	2021-10-12 13:58:56.792	2021-10-14 08:00:00	Gary Trent Jr.	1629018	gary-trent-jr	6-5	209	33	G-F	ckurtr74v1130580hsggipc6wc
ckurtr6m0940180hs8pi8byws	2021-10-12 13:58:56.797	2021-10-14 08:00:00	Pascal Siakam	1627783	pascal-siakam	6-9	230	43	F	ckurtr74v1130580hsggipc6wc
ckurtr6m2940880hsrzaeuu0k	2021-10-12 13:58:57.092	2021-10-14 08:00:00	Royce O'Neale	1626220	royce-oneale	6-4	226	23	F	ckurtr74y1131280hsgn5id1b7
ckurtr6ju916380hsxfvphc6y	2021-10-12 13:58:56.561	2021-10-14 08:00:00	Anthony Gill	1630264	anthony-gill	6-7	230	16	F	ckurtr7501131980hsxu0tclct
ckurtr6k5919880hsfv68t4ix	2021-10-12 13:58:57.354	2021-10-14 08:00:00	Ish Smith	202397	ish-smith	6-0	175	14	G	ckurtr7501131980hsxu0tclct
ckurtr6jh912180hsgw8ccsbh	2021-10-12 13:58:58.145	2021-10-14 08:00:00	Cam Reddish	1629629	cam-reddish	6-8	218	22	F-G	ckurtr71v1111680hso3ir0d8j
ckurtr6jj912880hsdyds6cyi	2021-10-12 13:58:57.919	2021-10-14 08:00:00	Bruno Fernando	1628981	bruno-fernando	6-9	240	24	F-C	ckurtr71v1111680hso3ir0d8j
ckurtr6jo914280hs1olbpuqg	2021-10-12 13:58:57.379	2021-10-14 08:00:00	Danilo Gallinari	201568	danilo-gallinari	6-10	233	8	F	ckurtr71v1111680hso3ir0d8j
ckurtr6jq914980hsnupiaax4	2021-10-12 13:58:56.823	2021-10-14 08:00:00	Trae Young	1629027	trae-young	6-1	180	11	G	ckurtr71v1111680hso3ir0d8j
ckurtr6js915680hsdlpq236f	2021-10-12 13:58:57.907	2021-10-14 08:00:00	De'Andre Hunter	1629631	deandre-hunter	6-8	225	12	F-G	ckurtr71v1111680hso3ir0d8j
ckurtr5lv576880hs7za5mfvz	2021-10-12 13:58:55.754	2021-10-14 08:00:00	Grant Williams	1629684	grant-williams	6-6	236	12	F	ckurtr72t1112380hs8x0kp6w2
ckurtr5lz577580hs8gf7hfgo	2021-10-12 13:58:55.761	2021-10-14 08:00:00	Semi Ojeleye	1628400	semi-ojeleye	6-6	240	37	F	ckurtr72t1112380hs8x0kp6w2
ckurtr5m1578280hsm214peov	2021-10-12 13:58:55.771	2021-10-14 08:00:00	Tacko Fall	1629605	tacko-fall	7-5	311	99	C	ckurtr72t1112380hs8x0kp6w2
ckurtr5st645480hs8c0er0b2	2021-10-12 13:58:56.3	2021-10-14 08:00:00	Carsen Edwards	1629035	carsen-edwards	5-11	200	4	G	ckurtr72t1112380hs8x0kp6w2
ckurtr5zm711280hsb6f55njp	2021-10-12 13:58:56.832	2021-10-14 08:00:00	Moses Brown	1629650	moses-brown	7-2	245	9	C	ckurtr72t1112380hs8x0kp6w2
ckurtr674775680hs83i0hlrj	2021-10-12 13:58:57.647	2021-10-14 08:00:00	Payton Pritchard	1630202	payton-pritchard	6-1	195	11	G	ckurtr72t1112380hs8x0kp6w2
ckurtr677776380hsbtrysh56	2021-10-12 13:58:57.392	2021-10-14 08:00:00	Jabari Parker	203953	jabari-parker	6-8	245	20	F	ckurtr72t1112380hs8x0kp6w2
ckurtr6a6807180hswxpgr0f2	2021-10-12 13:58:57.651	2021-10-14 08:00:00	Tristan Thompson	202684	tristan-thompson	6-9	254	13	C-F	ckurtr72t1112380hs8x0kp6w2
ckurtr6gr881380hs2mmlbkgm	2021-10-12 13:58:55.766	2021-10-14 08:00:00	Tremont Waters	1629682	tremont-waters	5-10	175	51	G	ckurtr72t1112380hs8x0kp6w2
ckurtr6hd888380hs4noa0lrm	2021-10-12 13:58:56.304	2021-10-14 08:00:00	Aaron Nesmith	1630174	aaron-nesmith	6-5	215	26	G-F	ckurtr72t1112380hs8x0kp6w2
ckurtr6hg889080hscg09icds	2021-10-12 13:58:56.308	2021-10-14 08:00:00	Marcus Smart	203935	marcus-smart	6-3	220	36	G	ckurtr72t1112380hs8x0kp6w2
ckurtr6hv893980hsv3ciome0	2021-10-12 13:58:56.566	2021-10-14 08:00:00	Evan Fournier	203095	evan-fournier	6-7	205	94	G-F	ckurtr72t1112380hs8x0kp6w2
ckurtr6iw905180hs7zurf906	2021-10-12 13:58:57.397	2021-10-14 08:00:00	Al Horford	201143	al-horford	6-9	240	42	C-F	ckurtr72t1112380hs8x0kp6w2
ckurtr6iy905880hsa711so5s	2021-10-12 13:58:57.401	2021-10-14 08:00:00	Robert Williams III	1629057	robert-williams-iii	6-8	237	44	C-F	ckurtr72t1112380hs8x0kp6w2
ckurtr6j0906580hsdftgqfno	2021-10-12 13:58:57.405	2021-10-14 08:00:00	Romeo Langford	1629641	romeo-langford	6-4	216	45	G-F	ckurtr72t1112380hs8x0kp6w2
ckurtr6j4907980hso1a5379g	2021-10-12 13:58:57.657	2021-10-14 08:00:00	Luke Kornet	1628436	luke-kornet	7-2	250	40	F-C	ckurtr72t1112380hs8x0kp6w2
ckurtr5m9580380hsm0h0chri	2021-10-12 13:58:55.785	2021-10-14 08:00:00	James Harden	201935	james-harden	6-5	220	13	G	ckurtr72y1113080hs005x0gxk
ckurtr5p8612580hsinl4uat9	2021-10-12 13:58:56.035	2021-10-14 08:00:00	Tyler Johnson	204020	tyler-johnson	6-3	186	10	G	ckurtr72y1113080hs005x0gxk
ckurtr67c777780hstpxm5cme	2021-10-12 13:58:57.414	2021-10-14 08:00:00	Landry Shamet	1629013	landry-shamet	6-4	190	20	G	ckurtr72y1113080hs005x0gxk
ckurtr67f778480hsilxgu85n	2021-10-12 13:58:57.418	2021-10-14 08:00:00	Alize Johnson	1628993	alize-johnson	6-7	212	24	F	ckurtr72y1113080hs005x0gxk
ckurtr5wg680480hs27lawwx6	2021-10-12 13:58:56.588	2021-10-14 08:00:00	LaMelo Ball	1630163	lamelo-ball	6-6	180	2	G	ckurtr7311113780hsgrdqiegk
ckurtr5wj681180hs8hu7di9c	2021-10-12 13:58:56.593	2021-10-14 08:00:00	Caleb Martin	1628997	caleb-martin	6-5	205	10	F	ckurtr7311113780hsgrdqiegk
ckurtr5zt712680hsfjanmy9g	2021-10-12 13:58:56.842	2021-10-14 08:00:00	Bismack Biyombo	202687	bismack-biyombo	6-8	255	8	C	ckurtr7311113780hsgrdqiegk
ckurtr5mr585280hs89tqb7od	2021-10-12 13:58:55.837	2021-10-14 08:00:00	Tomas Satoransky	203107	tomas-satoransky	6-7	210	31	G	ckurtr7341114480hs337eaj26
ckurtr5pc613980hsv7gx7wsd	2021-10-12 13:58:56.045	2021-10-14 08:00:00	Lauri Markkanen	1628374	lauri-markkanen	7-0	240	24	F-C	ckurtr7341114480hs337eaj26
ckurtr5pe614680hscbekf4r0	2021-10-12 13:58:56.05	2021-10-14 08:00:00	Patrick Williams	1630172	patrick-williams	6-7	215	44	F	ckurtr7341114480hs337eaj26
ckurtr5sw646180hsrkf8a9rw	2021-10-12 13:58:56.614	2021-10-14 08:00:00	Garrett Temple	202066	garrett-temple	6-5	195	17	G-F	ckurtr7341114480hs337eaj26
ckurtr5wn682580hs3i8peudz	2021-10-12 13:58:56.601	2021-10-14 08:00:00	Cristiano Felicio	1626245	cristiano-felicio	6-11	270	6	F-C	ckurtr7341114480hs337eaj26
ckurtr5wu684680hs2sgbj7ft	2021-10-12 13:58:56.632	2021-10-14 08:00:00	Brodric Thomas	1630271	brodric-thomas	6-5	185	33	G	ckurtr7371115180hslnccru8a
ckurtr5wy686080hskawkaxsg	2021-10-12 13:58:56.637	2021-10-14 08:00:00	Isaac Okoro	1630171	isaac-okoro	6-5	225	35	F-G	ckurtr7371115180hslnccru8a
ckurtr5x0686780hsphvxgz3e	2021-10-12 13:58:56.642	2021-10-14 08:00:00	Isaiah Hartenstein	1628392	isaiah-hartenstein	7-0	250	55	C-F	ckurtr7371115180hslnccru8a
ckurtr67t782680hs8mjmstlw	2021-10-12 13:58:57.448	2021-10-14 08:00:00	Matthew Dellavedova	203521	matthew-dellavedova	6-3	200	18	G	ckurtr7371115180hslnccru8a
ckurtr6ab808580hst4nc27s6	2021-10-12 13:58:57.683	2021-10-14 08:00:00	Kevin Love	201567	kevin-love	6-8	251	0	F-C	ckurtr7371115180hslnccru8a
ckurtr5t6648280hslati77ow	2021-10-12 13:58:56.321	2021-10-14 08:00:00	Tyler Bey	1630189	tyler-bey	6-7	215	2	F	ckurtr73a1115880hsxkdan1ud
ckurtr5zy714080hsbkiyh7on	2021-10-12 13:58:56.858	2021-10-14 08:00:00	Josh Green	1630182	josh-green	6-5	200	8	G	ckurtr73a1115880hsxkdan1ud
ckurtr600714780hsosfw492f	2021-10-12 13:58:56.862	2021-10-14 08:00:00	Dorian Finney-Smith	1627827	dorian-finney-smith	6-7	220	10	F	ckurtr73a1115880hsxkdan1ud
ckurtr5no594380hsrx53gimi	2021-10-12 13:58:55.901	2021-10-14 08:00:00	JaVale McGee	201580	javale-mcgee	7-0	270	34	C-F	ckurtr73c1116580hs3i36jjw5
ckurtr680784780hs5t2dwxph	2021-10-12 13:58:57.462	2021-10-14 08:00:00	Austin Rivers	203085	austin-rivers	6-4	200	25	G	ckurtr73c1116580hs3i36jjw5
ckurtr5tf650380hsuwub90sp	2021-10-12 13:58:56.336	2021-10-14 08:00:00	Rodney McGruder	203585	rodney-mcgruder	6-4	205	17	G	ckurtr73f1117280hsgklsbom1
ckurtr60g718980hsgo4b4dgh	2021-10-12 13:58:56.902	2021-10-14 08:00:00	Deividas Sirvydis	1629686	deividas-sirvydis	6-8	190	91	F-G	ckurtr73f1117280hsgklsbom1
ckurtr6af809980hsebge0ebi	2021-10-12 13:58:57.7	2021-10-14 08:00:00	Josh Jackson	1628367	josh-jackson	6-8	207	20	G-F	ckurtr73f1117280hsgklsbom1
ckurtr6ai810680hs3wvu3ne2	2021-10-12 13:58:57.704	2021-10-14 08:00:00	Isaiah Stewart	1630191	isaiah-stewart	6-8	250	28	F-C	ckurtr73f1117280hsgklsbom1
ckurtr60v723180hss6dsw5xj	2021-10-12 13:58:56.927	2021-10-14 08:00:00	Anthony Lamb	1630237	anthony-lamb	6-6	227	33	F	ckurtr73k1118680hs60y14qgi
ckurtr6aw814880hstqwsvqv0	2021-10-12 13:58:57.725	2021-10-14 08:00:00	Christian Wood	1626174	christian-wood	6-10	214	35	F	ckurtr73k1118680hs60y14qgi
ckurtr5tz655980hstcaoruw8	2021-10-12 13:58:56.381	2021-10-14 08:00:00	Aaron Holiday	1628988	aaron-holiday	6-0	185	3	G	ckurtr73n1119380hs6h18kxhb
ckurtr5u1656680hsp259r6nc	2021-10-12 13:58:56.385	2021-10-14 08:00:00	Doug McDermott	203926	doug-mcdermott	6-7	225	20	F	ckurtr73n1119380hs6h18kxhb
ckurtr6b0816280hsfpjx6vz7	2021-10-12 13:58:57.739	2021-10-14 08:00:00	Goga Bitadze	1629048	goga-bitadze	6-11	250	88	C-F	ckurtr73n1119380hs6h18kxhb
ckurtr5u9658780hs5xhaiqvg	2021-10-12 13:58:56.398	2021-10-14 08:00:00	Luke Kennard	1628379	luke-kennard	6-5	206	5	G	ckurtr73q1120080hsuk9pz8mb
ckurtr6hq892580hsjstnm8qw	2021-10-12 13:58:56.429	2021-10-14 08:00:00	Devontae Cacok	1629719	devontae-cacok	6-7	240	12	F	ckurtr73t1120780hsfcm6d1g8
ckurtr6hs893280hslknbeqtw	2021-10-12 13:58:56.434	2021-10-14 08:00:00	Alfonzo McKinnie	1628035	alfonzo-mckinnie	6-7	215	28	F	ckurtr73t1120780hsfcm6d1g8
ckurtr5xx697280hshxt3wgxe	2021-10-12 13:58:56.713	2021-10-14 08:00:00	Grayson Allen	1628960	grayson-allen	6-4	198	3	G	ckurtr73w1121480hs5q03bem0
ckurtr5y0697980hs0q86ydlx	2021-10-12 13:58:56.717	2021-10-14 08:00:00	Ja Morant	1629630	ja-morant	6-3	174	12	G	ckurtr73w1121480hs5q03bem0
ckurtr63r753980hscqulpc0u	2021-10-12 13:58:57.186	2021-10-14 08:00:00	Desmond Bane	1630217	desmond-bane	6-5	215	22	G	ckurtr73w1121480hs5q03bem0
ckurtr5y8700080hs1kbgqjf5	2021-10-12 13:58:56.736	2021-10-14 08:00:00	Justin Jackson	1628382	justin-jackson	6-8	220	44	F	ckurtr7411122880hsbsw23one
ckurtr647758180hs1mwtm9lu	2021-10-12 13:58:57.22	2021-10-14 08:00:00	Jordan Nwora	1629670	jordan-nwora	6-8	225	13	F	ckurtr7411122880hsbsw23one
ckurtr6bj822580hsz0rxfnv6	2021-10-12 13:58:57.784	2021-10-14 08:00:00	Jeff Teague	201952	jeff-teague	6-3	195	5	G	ckurtr7411122880hsbsw23one
ckurtr6bl823280hsy8xljjp6	2021-10-12 13:58:57.792	2021-10-14 08:00:00	Khris Middleton	203114	khris-middleton	6-7	222	22	F	ckurtr7411122880hsbsw23one
ckurtr6bo823980hs6mv47691	2021-10-12 13:58:57.797	2021-10-14 08:00:00	Mamadi Diakite	1629603	mamadi-diakite	6-9	228	25	F	ckurtr7411122880hsbsw23one
ckurtr69k800880hs57u9ev24	2021-10-12 13:58:57.593	2021-10-14 08:00:00	Robert Covington	203496	robert-covington	6-7	209	23	F	ckurtr74o1128480hsw91nsqm0
ckurtr64g760980hsd7738j7d	2021-10-12 13:58:57.255	2021-10-14 08:00:00	Karl-Anthony Towns	1626157	karl-anthony-towns	6-11	248	32	C-F	ckurtr7441123580hswoadqvid
ckurtr5qy630080hs9rdsmna3	2021-10-12 13:58:56.189	2021-10-14 08:00:00	Taj Gibson	201959	taj-gibson	6-9	232	67	F	ckurtr74b1124980hs9jiumudw
ckurtr5qp627280hsb6gdrt68	2021-10-12 13:58:56.171	2021-10-14 08:00:00	Brandon Ingram	1627742	brandon-ingram	6-8	190	14	F	ckurtr7471124280hshmkzngtt
ckurtr5yf701480hsn20vaegh	2021-10-12 13:58:56.746	2021-10-14 08:00:00	Jaxson Hayes	1629637	jaxson-hayes	6-11	220	10	C-F	ckurtr7471124280hshmkzngtt
ckurtr64p763780hsyc2cfi0r	2021-10-12 13:58:57.274	2021-10-14 08:00:00	James Nunnally	203263	james-nunnally	6-7	205	21	F	ckurtr7471124280hshmkzngtt
ckurtr5om604880hsagjzygk4	2021-10-12 13:58:55.976	2021-10-14 08:00:00	Paul Reed	1630194	paul-reed	6-9	210	44	F	ckurtr74j1127080hss2acd21l
ckurtr5ri635680hs0zqvw1ii	2021-10-12 13:58:56.221	2021-10-14 08:00:00	Dwight Howard	2730	dwight-howard	6-10	265	39	C-F	ckurtr74j1127080hss2acd21l
ckurtr624735080hsi8a4xzw2	2021-10-12 13:58:57.003	2021-10-14 08:00:00	Ben Simmons	1627732	ben-simmons	6-11	240	25	G-F	ckurtr74j1127080hss2acd21l
ckurtr626735780hscrmwdsi8	2021-10-12 13:58:57.008	2021-10-14 08:00:00	Seth Curry	203552	seth-curry	6-2	185	31	G	ckurtr74j1127080hss2acd21l
ckurtr5s7641280hs8kbbz194	2021-10-12 13:58:56.265	2021-10-14 08:00:00	Richaun Holmes	1626158	richaun-holmes	6-10	235	22	F	ckurtr74q1129180hszuvk8s9g
ckurtr6l7931080hsll8bv4kk	2021-10-12 13:58:57.617	2021-10-14 08:00:00	Chimezie Metu	1629002	chimezie-metu	6-9	225	25	F-C	ckurtr74q1129180hszuvk8s9g
ckurtr62k739980hsmq6enrg0	2021-10-12 13:58:57.044	2021-10-14 08:00:00	Keldon Johnson	1629640	keldon-johnson	6-5	220	3	F-G	ckurtr74t1129880hsjudk6xi2
ckurtr62m740680hsoey7f87c	2021-10-12 13:58:57.049	2021-10-14 08:00:00	Dejounte Murray	1627749	dejounte-murray	6-4	180	5	G	ckurtr74t1129880hsjudk6xi2
ckurtr62o741380hs909webho	2021-10-12 13:58:57.055	2021-10-14 08:00:00	DeMar DeRozan	201942	demar-derozan	6-6	220	10	G-F	ckurtr74t1129880hsjudk6xi2
ckurtr6ge876480hs6q2kix6a	2021-10-12 13:58:58.118	2021-10-14 08:00:00	Aron Baynes	203382	aron-baynes	6-10	260	46	C-F	ckurtr74v1130580hsggipc6wc
ckurtr65k772880hs8l2bje1g	2021-10-12 13:58:57.332	2021-10-14 08:00:00	Derrick Favors	202324	derrick-favors	6-9	265	15	F	ckurtr74y1131280hsgn5id1b7
ckurtr65z773580hsoqfzhkj5	2021-10-12 13:58:57.338	2021-10-14 08:00:00	Georges Niang	1627777	georges-niang	6-7	230	31	F	ckurtr74y1131280hsgn5id1b7
ckurtr6k7920580hs9xz8t0qr	2021-10-12 13:58:57.359	2021-10-14 08:00:00	Daniel Gafford	1629655	daniel-gafford	6-10	234	21	F-C	ckurtr7501131980hsxu0tclct
ckurtr6ka921280hsii7a68pf	2021-10-12 13:58:57.365	2021-10-14 08:00:00	Alex Len	203458	alex-len	7-0	250	27	C	ckurtr7501131980hsxu0tclct
ckurtr6kc921980hs4vxxzt3w	2021-10-12 13:58:57.37	2021-10-14 08:00:00	Davis Bertans	202722	davis-bertans	6-10	225	42	F	ckurtr7501131980hsxu0tclct
\.


--
-- Data for Name: Team; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Team" (id, "createdAt", "updatedAt", name, handle, slug, city, abbreviation, conference, division, established, wins, losses, "winPercentage", "colorScheme") FROM stdin;
ckurtr71v1111680hso3ir0d8j	2021-10-12 13:58:55.558	2021-10-14 08:00:00	Hawks	1610612737	hawks	Atlanta	ATL	East	Southeast	1949	41	31	0.569	ckurtr43o017580hsdv34glfo
ckurtr72t1112380hs8x0kp6w2	2021-10-12 13:58:55.569	2021-10-14 08:00:00	Celtics	1610612738	celtics	Boston	BOS	East	Atlantic	1946	36	36	0.5	ckurtr43q018280hsnfgb317a
ckurtr72y1113080hs005x0gxk	2021-10-12 13:58:55.576	2021-10-14 08:00:00	Nets	1610612751	nets	Brooklyn	BKN	East	Atlantic	1976	48	24	0.667	ckurtr43l016880hs2acvmetu
ckurtr7311113780hsgrdqiegk	2021-10-12 13:58:55.584	2021-10-14 08:00:00	Hornets	1610612766	hornets	Charlotte	CHA	East	Southeast	1988	33	39	0.458	ckurtr43w019680hs9ko1e4a5
ckurtr7341114480hs337eaj26	2021-10-12 13:58:55.591	2021-10-14 08:00:00	Bulls	1610612741	bulls	Chicago	CHI	East	Central	1966	31	41	0.431	ckurtr41l001480hs8ch24n54
ckurtr7371115180hslnccru8a	2021-10-12 13:58:55.598	2021-10-14 08:00:00	Cavaliers	1610612739	cavaliers	Cleveland	CLE	East	Central	1970	22	50	0.306	ckurtr43t018980hsin84vvjl
ckurtr73a1115880hsxkdan1ud	2021-10-12 13:58:55.604	2021-10-14 08:00:00	Mavericks	1610612742	mavericks	Dallas	DAL	West	Southwest	1980	42	30	0.583	ckurtr43h016180hsbx2nthap
ckurtr73c1116580hs3i36jjw5	2021-10-12 13:58:55.61	2021-10-14 08:00:00	Nuggets	1610612743	nuggets	Denver	DEN	West	Northwest	1976	47	25	0.653	ckurtr438014080hsqm7g01ul
ckurtr73f1117280hsgklsbom1	2021-10-12 13:58:55.616	2021-10-14 08:00:00	Pistons	1610612765	pistons	Detroit	DET	East	Central	1948	20	52	0.278	ckurtr42w011280hsqsb5pd61
ckurtr73h1117980hsrqsjw8xn	2021-10-12 13:58:55.622	2021-10-14 08:00:00	Warriors	1610612744	warriors	Golden State	GSW	West	Pacific	1946	39	33	0.542	ckurtr436013380hsnpirsydy
ckurtr73k1118680hs60y14qgi	2021-10-12 13:58:55.629	2021-10-14 08:00:00	Rockets	1610612745	rockets	Houston	HOU	West	Southwest	1967	17	55	0.236	ckurtr41l001480hs8ch24n54
ckurtr73n1119380hs6h18kxhb	2021-10-12 13:58:55.636	2021-10-14 08:00:00	Pacers	1610612754	pacers	Indiana	IND	East	Central	1976	34	38	0.472	ckurtr416000080hs6tsvxzrc
ckurtr73q1120080hsuk9pz8mb	2021-10-12 13:58:55.642	2021-10-14 08:00:00	Clippers	1610612746	clippers	LA	LAC	West	Pacific	1970	47	25	0.653	ckurtr43b014780hs4yb4xem7
ckurtr73t1120780hsfcm6d1g8	2021-10-12 13:58:55.649	2021-10-14 08:00:00	Lakers	1610612747	lakers	Los Angeles	LAL	West	Pacific	1948	42	30	0.583	ckurtr430011980hs1mg9ep6d
ckurtr73w1121480hs5q03bem0	2021-10-12 13:58:55.656	2021-10-14 08:00:00	Grizzlies	1610612763	grizzlies	Memphis	MEM	West	Southwest	1995	38	34	0.528	ckurtr42e007080hsbpqlckuu
ckurtr73y1122180hs7mhd2u3c	2021-10-12 13:58:55.662	2021-10-14 08:00:00	Heat	1610612748	heat	Miami	MIA	East	Southeast	1988	40	32	0.556	ckurtr423004980hsc6mjyfwq
ckurtr7411122880hsbsw23one	2021-10-12 13:58:55.668	2021-10-14 08:00:00	Bucks	1610612749	bucks	Milwaukee	MIL	East	Central	1968	46	26	0.639	ckurtr42h007780hs9h2g54sd
ckurtr7441123580hswoadqvid	2021-10-12 13:58:55.673	2021-10-14 08:00:00	Timberwolves	1610612750	timberwolves	Minnesota	MIN	West	Northwest	1989	23	49	0.319	ckurtr41g000780hsc5swo8z3
ckurtr7471124280hshmkzngtt	2021-10-12 13:58:55.679	2021-10-14 08:00:00	Pelicans	1610612740	pelicans	New Orleans	NOP	West	Southwest	2002	31	41	0.431	ckurtr42u010580hsgqan9ovh
ckurtr74b1124980hs9jiumudw	2021-10-12 13:58:55.685	2021-10-14 08:00:00	Knicks	1610612752	knicks	New York	NYK	East	Atlantic	1946	41	31	0.569	ckurtr42r009880hsy9g5f2ns
ckurtr74e1125680hs5fbtikqr	2021-10-12 13:58:55.692	2021-10-14 08:00:00	Thunder	1610612760	thunder	Oklahoma City	OKC	West	Northwest	1967	22	50	0.306	ckurtr42l008480hs6a1cjcdw
ckurtr74g1126380hsi40absdd	2021-10-12 13:58:55.699	2021-10-14 08:00:00	Magic	1610612753	magic	Orlando	ORL	East	Southeast	1989	21	51	0.292	ckurtr433012680hssxv2vkz5
ckurtr74j1127080hss2acd21l	2021-10-12 13:58:55.704	2021-10-14 08:00:00	76ers	1610612755	sixers	Philadelphia	PHI	East	Atlantic	1949	49	23	0.681	ckurtr42o009180hsl0i4cmp9
ckurtr74l1127780hsxilzh94e	2021-10-12 13:58:55.71	2021-10-14 08:00:00	Suns	1610612756	suns	Phoenix	PHX	West	Pacific	1968	51	21	0.708	ckurtr42b006380hscrs8hy14
ckurtr74o1128480hsw91nsqm0	2021-10-12 13:58:55.716	2021-10-14 08:00:00	Trail Blazers	1610612757	blazers	Portland	POR	West	Northwest	1970	42	30	0.583	ckurtr427005680hsn81hfsru
ckurtr74q1129180hszuvk8s9g	2021-10-12 13:58:55.721	2021-10-14 08:00:00	Kings	1610612758	kings	Sacramento	SAC	West	Pacific	1948	31	41	0.431	ckurtr41w003580hsdpmvllkm
ckurtr74t1129880hsjudk6xi2	2021-10-12 13:58:55.728	2021-10-14 08:00:00	Spurs	1610612759	spurs	San Antonio	SAS	West	Southwest	1976	33	39	0.458	ckurtr41s002880hsd4nx916c
ckurtr74v1130580hsggipc6wc	2021-10-12 13:58:55.734	2021-10-14 08:00:00	Raptors	1610612761	raptors	Toronto	TOR	East	Atlantic	1995	27	45	0.375	ckurtr41l001480hs8ch24n54
ckurtr74y1131280hsgn5id1b7	2021-10-12 13:58:55.741	2021-10-14 08:00:00	Jazz	1610612762	jazz	Utah	UTA	West	Northwest	1974	52	20	0.722	ckurtr420004280hsy911nloa
ckurtr7501131980hsxu0tclct	2021-10-12 13:58:55.747	2021-10-14 08:00:00	Wizards	1610612764	wizards	Washington	WAS	East	Southeast	1961	34	38	0.472	ckurtr440020380hsytkobos7
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, email, password) FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
7d2e474e-77bf-4082-9d4c-fa0cc9b133b8	bb195a83c4789be5771b0e8ddd2e5562e0a1930a92bf05db925a40ea76aa27d7	2021-10-14 23:41:50.858069-04	20211015034150_init_migration	\N	\N	2021-10-14 23:41:50.818679-04	1
\.


--
-- Name: Coach Coach_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Coach"
    ADD CONSTRAINT "Coach_pkey" PRIMARY KEY (id);


--
-- Name: ColorScheme ColorScheme_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ColorScheme"
    ADD CONSTRAINT "ColorScheme_pkey" PRIMARY KEY (id);


--
-- Name: Image Image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);


--
-- Name: Player Player_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_pkey" PRIMARY KEY (id);


--
-- Name: Team Team_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Coach_handle_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Coach_handle_key" ON public."Coach" USING btree (handle);


--
-- Name: Coach_image_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Coach_image_key" ON public."Coach" USING btree (image);


--
-- Name: Coach_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Coach_name_key" ON public."Coach" USING btree (name);


--
-- Name: Coach_team_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Coach_team_idx" ON public."Coach" USING btree (team);


--
-- Name: Image_player_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Image_player_key" ON public."Image" USING btree (player);


--
-- Name: Image_team_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Image_team_key" ON public."Image" USING btree (team);


--
-- Name: Image_url_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Image_url_key" ON public."Image" USING btree (url);


--
-- Name: Player_handle_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Player_handle_key" ON public."Player" USING btree (handle);


--
-- Name: Player_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Player_name_key" ON public."Player" USING btree (name);


--
-- Name: Player_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Player_slug_key" ON public."Player" USING btree (slug);


--
-- Name: Player_team_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Player_team_idx" ON public."Player" USING btree (team);


--
-- Name: Team_abbreviation_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Team_abbreviation_key" ON public."Team" USING btree (abbreviation);


--
-- Name: Team_colorScheme_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Team_colorScheme_idx" ON public."Team" USING btree ("colorScheme");


--
-- Name: Team_handle_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Team_handle_key" ON public."Team" USING btree (handle);


--
-- Name: Team_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Team_name_key" ON public."Team" USING btree (name);


--
-- Name: Team_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Team_slug_key" ON public."Team" USING btree (slug);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Coach Coach_image_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Coach"
    ADD CONSTRAINT "Coach_image_fkey" FOREIGN KEY (image) REFERENCES public."Image"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Coach Coach_team_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Coach"
    ADD CONSTRAINT "Coach_team_fkey" FOREIGN KEY (team) REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Image Image_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_player_fkey" FOREIGN KEY (player) REFERENCES public."Player"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Image Image_team_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_team_fkey" FOREIGN KEY (team) REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Player Player_team_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_team_fkey" FOREIGN KEY (team) REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Team Team_colorScheme_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_colorScheme_fkey" FOREIGN KEY ("colorScheme") REFERENCES public."ColorScheme"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

