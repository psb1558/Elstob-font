<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="xml" version="1.0" encoding="UTF-8"/>

  <xsl:param name="itval">0</xsl:param>

    <xsl:template match="node()|@*">
      <xsl:copy>
         <xsl:apply-templates select="node()|@*"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="axes">
      <xsl:copy>
	<xsl:apply-templates select="@* | *"/>
	<xsl:element name="axis">
	  <xsl:attribute name="tag">ital</xsl:attribute>
	  <xsl:attribute name="name">Italic</xsl:attribute>
	  <xsl:attribute name="minimum"><xsl:value-of select="$itval"/></xsl:attribute>
	  <xsl:attribute name="maximum"><xsl:value-of select="$itval"/></xsl:attribute>
	  <xsl:attribute name="default"><xsl:value-of select="$itval"/></xsl:attribute>
	  <xsl:attribute name="hidden">1</xsl:attribute>
	</xsl:element>
      <xsl:element name="newNode"/>
    </xsl:copy>
    </xsl:template>

    <xsl:template match="location">
      <xsl:copy>
	<xsl:apply-templates select="@* | *"/>
	<xsl:element name="dimension">
	  <xsl:attribute name="name">Italic</xsl:attribute>
	  <xsl:attribute name="xvalue"><xsl:value-of select="$itval"/></xsl:attribute>
	</xsl:element>
      </xsl:copy>
    </xsl:template>
      
</xsl:stylesheet>
