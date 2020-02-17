<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="xml" version="1.0" encoding="UTF-8"/>

    <xsl:template match="node()|@*">
      <xsl:copy>
         <xsl:apply-templates select="node()|@*"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="instance[@stylename='Grade']"/>
    
    <xsl:template match="instance[@stylename='6pt']"/>

    <xsl:template match="instance[@stylename='6pt Medium']"/>

    <xsl:template match="instance[@stylename='6pt SemiBold']"/>

    <xsl:template match="instance[@stylename='6pt Bold']"/>

    <xsl:template match="instance[@stylename='Grade Italic']"/>

    <xsl:template match="instance[@stylename='6pt Italic']"/>

    <xsl:template match="instance[@stylename='6pt Medium Italic']"/>

    <xsl:template match="instance[@stylename='6pt SemiBold Italic']"/>

    <xsl:template match="instance[@stylename='6pt Bold Italic']"/>
</xsl:stylesheet>
