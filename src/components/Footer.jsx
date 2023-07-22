import { SocialBar, Modal } from '../hoc'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const ScrollTopButton = () => {
  const scrollTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <button type='button'
            onClick={scrollTop}
            className='block absolute btn-primary rounded-xl h-12 w-12 right-6 lg:right-0 -top-6'>
      <FontAwesomeIcon icon={solid('angles-up')} />
    </button>
  )
}

const Footer = () => {
  const [toggleDataProtection, setToggleDataProtection] = useState(false)
  const [toggleImpress, setToggleImpress] = useState(false)

  return (
    <div className='bg-themeGrey-200'>
      <div className="flex justify-center relative text-center flex-col text-white p-16 max-w-7xl mx-auto">
        <ScrollTopButton />
        <SocialBar hover={true} />
        <div className='flex justify-center gap-4 mt-6'>
          <button type='button'
                  onClick={() => setToggleDataProtection(!toggleDataProtection)}
                  className='hover:text-teal-600 ease-in-out duration-300'>
            Datenschutz
          </button>
          <button type='button'
                  onClick={() => setToggleImpress(!toggleImpress)}
                  className='hover:text-teal-600 ease-in-out duration-300'>
            Impressum
          </button>
        </div>
        <p className='mt-6'>Copyright © 2023 by Philipp Schurig</p>
      </div>

      <Modal onClose={() => setToggleDataProtection(false)} isShow={toggleDataProtection}>
        <h1 className='section-head-text'>Datenschutz&shy;erkl&auml;rung</h1>
        <h2 className='text-2xl text-gray-400 mb-4'>1. Datenschutz auf einen Blick</h2>
        <h3 className={`${styles.sectionSubText} mb-3`}>Allgemeine Hinweise</h3>
        <p className='mb-6'>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Datenerfassung auf dieser Website</h3>
        <h4 className='text-base text-teal-500 font-semibold mb-2'>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4>
        <p className='mb-6'>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.</p>
        <h4 className='text-base text-teal-500 font-semibold mb-2'>Wie erfassen wir Ihre Daten?</h4>
        <p className='mb-2'>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
        <p className='mb-6'>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
        <h4 className='text-base text-teal-500 font-semibold mb-2'>Wof&uuml;r nutzen wir Ihre Daten?</h4>
        <p className='mb-6'>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
        <h4 className='text-base text-teal-500 font-semibold mb-2'>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
        <p className='mb-2'>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p>
        <p className='mb-6'>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>
        <p className='mb-2'>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
        <p className='mb-6'>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>

        <h2 className='text-2xl text-gray-400 mb-4'>2. Hosting</h2>
        <p className='mb-6'>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Strato</h3>
        <p className='mb-2'>Anbieter ist die Strato AG, Otto-Ostrowski-Stra&szlig;e 7, 10249 Berlin (nachfolgend &bdquo;Strato&ldquo;). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.</p>
        <p className='mb-2'>Weitere Informationen entnehmen Sie der Datenschutzerkl&auml;rung von Strato: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer">https://www.strato.de/datenschutz/</a>.</p>
        <p className='mb-6'>Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
        <h4 className='text-base text-teal-500 font-semibold mb-2'>Auftragsverarbeitung</h4>
        <p className='mb-6'>Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
        <h2 className='text-2xl text-gray-400 mb-4'>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
        <h3 className={`${styles.sectionSubText} mb-3`}>Datenschutz</h3>
        <p className='mb-2'>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p>
        <p className='mb-2'>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p>
        <p className='mb-6'>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Hinweis zur verantwortlichen Stelle</h3>
        <p className='mb-2'>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>
        <p className='mb-2'>Philipp Schurig<br />
          Am Silberberg 25<br />
          01454 Radeberg</p>

        <p className='mb-2'>Telefon: +49 (‭0) 152 57613636‬<br />
          E-Mail: info@philippschurig.de</p>
        <p className='mb-6'>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>

        <h3 className={`${styles.sectionSubText} mb-3`}>Speicherdauer</h3>
        <p className='mb-6'>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
        <p className='mb-6'>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
        <p className='mb-6'>Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, k&ouml;nnen Ihre personenbezogene Daten in diese Drittstaaten &uuml;bertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen L&auml;ndern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbeh&ouml;rden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen k&ouml;nnten. Es kann daher nicht ausgeschlossen werden, dass US-Beh&ouml;rden (z.&nbsp;B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu &Uuml;berwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungst&auml;tigkeiten keinen Einfluss.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p className='mb-6'>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
        <p className='mb-6'>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
        <p className='mb-6'>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3>
        <p className='mb-6'>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>
        <p className='mb-6'>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Auskunft, Berichtigung und L&ouml;schung</h3>
        <p className='mb-6'>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
        <p className='mb-2'>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p>
        <ul className='mb-2'>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p className='mb-6'>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>SSL- bzw. TLS-Verschl&uuml;sselung</h3>
        <p className='mb-2'>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
        <p className='mb-6'>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>

        <h2 className='text-2xl text-gray-400 mb-4'>4. Datenerfassung auf dieser Website</h2>
        <h3 className={`${styles.sectionSubText} mb-3`}>Cookies</h3>
        <p className='mb-2'>Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen oder eine automatische L&ouml;schung durch Ihren Webbrowser erfolgt.</p>
        <p className='mb-2'>Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
        <p className='mb-2'>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren w&uuml;rden (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies k&ouml;nnen zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p>
        <p className='mb-2'>Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.</p>
        <p className='mb-2'>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p>
        <p className='mb-6'>Welche Cookies und Dienste auf dieser Website eingesetzt werden, k&ouml;nnen Sie dieser Datenschutzerkl&auml;rung entnehmen.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Server-Log-Dateien</h3>
        <p className='mb-2'>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:</p>
        <ul className='mb-2'>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p className='mb-2'>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
        <p className='mb-6'>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Kontaktformular</h3>
        <p className='mb-2'>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        <p className='mb-2'>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
        <p className='mb-6'>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Anfrage per E-Mail oder Telefon</h3>
        <p className='mb-2'>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        <p className='mb-2'>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
        <p className='mb-6'>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>

        <h2 className='text-2xl text-gray-400 mb-4'>5. Soziale Medien</h2>
        <h3 className={`${styles.sectionSubText} mb-3`}>Facebook</h3>
        <p className='mb-2'>Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittl&auml;nder &uuml;bertragen.</p>
        <p className='mb-2'>Eine &Uuml;bersicht &uuml;ber die Facebook Social-Media-Elemente finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.</p>
        <p className='mb-2'>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endger&auml;t und dem Facebook-Server hergestellt. Facebook erh&auml;lt dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook &bdquo;Like-Button&ldquo; anklicken, w&auml;hrend Sie in Ihrem Facebook-Account eingeloggt sind, k&ouml;nnen Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/privacy/explanation</a>.</p>
        <p className='mb-2'>Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer m&ouml;glichst umfassenden Sichtbarkeit in den Sozialen Medien.</p>
        <p className='mb-2'>Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam f&uuml;r diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei ausschlie&szlig;lich auf die Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools und f&uuml;r die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. F&uuml;r die Datensicherheit der Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten k&ouml;nnen Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p>
        <p className='mb-6'>Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/help/566994660333381</a> und <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policy.php</a>.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Twitter</h3>
        <p className='mb-2'>Auf dieser Website sind Funktionen des Dienstes Twitter eingebunden. Diese Funktionen werden angeboten durch die Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Irland.</p>
        <p className='mb-2'>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endger&auml;t und dem Twitter-Server hergestellt. Twitter erh&auml;lt dadurch Informationen &uuml;ber den Besuch dieser Website durch Sie. Durch das Benutzen von Twitter und der Funktion &bdquo;Re-Tweet&ldquo; werden die von Ihnen besuchten Websites mit Ihrem Twitter-Account verkn&uuml;pft und anderen Nutzern bekannt gegeben. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch Twitter erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Twitter unter: <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener noreferrer">https://twitter.com/de/privacy</a>.</p>
        <p className='mb-2'>Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer m&ouml;glichst umfassenden Sichtbarkeit in den Sozialen Medien.</p>
        <p className='mb-2'>Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie hier: <a href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html" target="_blank" rel="noopener noreferrer">https://gdpr.twitter.com/en/controller-to-controller-transfers.html</a>.</p>
        <p className='mb-6'>Ihre Datenschutzeinstellungen bei Twitter k&ouml;nnen Sie in den Konto-Einstellungen unter <a href="https://twitter.com/account/settings" target="_blank" rel="noopener noreferrer">https://twitter.com/account/settings</a> &auml;ndern.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Instagram</h3>
        <p className='mb-2'>Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.</p>
        <p className='mb-2'>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endger&auml;t und dem Instagram-Server hergestellt. Instagram erh&auml;lt dadurch Informationen &uuml;ber den Besuch dieser Website durch Sie.</p>
        <p className='mb-2'>Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k&ouml;nnen Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p>
        <p className='mb-2'>Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer m&ouml;glichst umfassenden Sichtbarkeit in den Sozialen Medien.</p>
        <p className='mb-2'>Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam f&uuml;r diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei ausschlie&szlig;lich auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und f&uuml;r die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. F&uuml;r die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten k&ouml;nnen Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p>
        <p className='mb-2'>Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">https://help.instagram.com/519522125107875</a> und <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/help/566994660333381</a>.</p>
        <p className='mb-6'>Weitere Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Instagram: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer">https://instagram.com/about/legal/privacy/</a>.</p>

        <h2 className='text-2xl text-gray-400 mb-4'>6. Plugins und Tools</h2>
        <h3 className={`${styles.sectionSubText} mb-3`}>Google Fonts (lokales Hosting)</h3>
        <p className='mb-2'>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
        <p className='mb-6'>Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerkl&auml;rung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Font Awesome (lokales Hosting)</h3>
        <p className='mb-2'>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome. Font Awesome ist lokal installiert. Eine Verbindung zu Servern von Fonticons, Inc. findet dabei nicht statt.</p>
        <p className='mb-6'>Weitere Informationen zu Font Awesome finden Sie in der Datenschutzerkl&auml;rung f&uuml;r Font Awesome unter: <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">https://fontawesome.com/privacy</a>.</p>
        <h3 className={`${styles.sectionSubText} mb-3`}>Google reCAPTCHA</h3>
        <p className='mb-2'>Wir nutzen &bdquo;Google reCAPTCHA&ldquo; (im Folgenden &bdquo;reCAPTCHA&ldquo;) auf dieser Website. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.</p>
        <p className='mb-2'>Mit reCAPTCHA soll &uuml;berpr&uuml;ft werden, ob die Dateneingabe auf dieser Website (z.&nbsp;B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z.&nbsp;B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer get&auml;tigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.</p>
        <p className='mb-2'>Die reCAPTCHA-Analysen laufen vollst&auml;ndig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.</p>
        <p className='mb-2'>Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbr&auml;uchlicher automatisierter Aussp&auml;hung und vor SPAM zu sch&uuml;tzen. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
        <p className='mb-6'>Weitere Informationen zu Google reCAPTCHA entnehmen Sie den Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen unter folgenden Links: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a> und <a href="https://policies.google.com/terms?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/terms?hl=de</a>.</p>
        <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
      </Modal>

      <Modal onClose={() => setToggleImpress(false)} isShow={toggleImpress}>
        <h1 className={`${styles.sectionHeadText}`}>Impressum</h1>
        <h2 className='text-2xl text-gray-400 mb-6'>Angaben gemäß § 5 TMG:</h2>
        <p className='mb-6'>Philipp Schurig</p>
        <h3 className={`${styles.sectionSubText} mb-2`}>Postanschrift:</h3>
        <p className='mb-6'>
          Am Silberberg 25 <br/>
          01454 Radeberg
        </p>
        <h3 className={`${styles.sectionSubText} mb-2`}>Kontakt:</h3>
        <p className='mb-8'>E-Mail: info@philippschurig.de</p>
        <h2 className='text-2xl text-gray-400 mb-2'>Hinweise zur Website</h2>
        <h3 className={`${styles.sectionSubText} mb-2`}>Urheberrechtliche Hinweise</h3>
        <p className='mb-8'>https://pixabay.com/</p>
        <h2 className='text-2xl text-gray-400 mb-2'>Information gemäß § 36 VSBG</h2>
        <p>Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:</p>
        <p className='mb-8'>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <p><em>Das Impressum wurde mit dem <a href="https://www.activemind.de/datenschutz/impressums-generator/">Impressums-Generator der activeMind AG</a> erstellt.</em></p>
      </Modal>
    </div>
  )
}

export default Footer